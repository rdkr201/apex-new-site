import { useEffect, useRef } from "react";

// 4D hypercube (tesseract) vertices: all combinations of ±1 in 4 dimensions
const baseVertices: [number, number, number, number][] = [];
for (let i = 0; i < 16; i++) {
  baseVertices.push([
    (i & 1) ? 1 : -1,
    (i & 2) ? 1 : -1,
    (i & 4) ? 1 : -1,
    (i & 8) ? 1 : -1,
  ]);
}

// Edges: connect vertices that differ in exactly one coordinate
const edges: [number, number][] = [];
for (let i = 0; i < 16; i++) {
  for (let j = i + 1; j < 16; j++) {
    let diff = 0;
    for (let d = 0; d < 4; d++) {
      if (baseVertices[i][d] !== baseVertices[j][d]) diff++;
    }
    if (diff === 1) edges.push([i, j]);
  }
}

// Role-specific distortion profiles
const roleProfiles: Record<string, { xzSpeed: number; xwSpeed: number; ywSpeed: number; distort: number; pulse: number }> = {
  "Portfolio Managers": { xzSpeed: 0.3, xwSpeed: 0.15, ywSpeed: 0.2, distort: 0.1, pulse: 0.05 },
  "Traders":           { xzSpeed: 0.6, xwSpeed: 0.4,  ywSpeed: 0.35, distort: 0.2, pulse: 0.12 },
  "Quants":            { xzSpeed: 0.25, xwSpeed: 0.5,  ywSpeed: 0.45, distort: 0.15, pulse: 0.03 },
  "Researchers":       { xzSpeed: 0.2, xwSpeed: 0.25, ywSpeed: 0.3, distort: 0.08, pulse: 0.06 },
  "Developers":        { xzSpeed: 0.45, xwSpeed: 0.35, ywSpeed: 0.5, distort: 0.25, pulse: 0.1 },
};

function rotate4D(
  v: [number, number, number, number],
  axz: number, axw: number, ayw: number
): [number, number, number, number] {
  let [x, y, z, w] = v;

  // XZ rotation
  let c = Math.cos(axz), s = Math.sin(axz);
  [x, z] = [x * c - z * s, x * s + z * c];

  // XW rotation
  c = Math.cos(axw); s = Math.sin(axw);
  [x, w] = [x * c - w * s, x * s + w * c];

  // YW rotation
  c = Math.cos(ayw); s = Math.sin(ayw);
  [y, w] = [y * c - w * s, y * s + w * c];

  return [x, y, z, w];
}

function project4Dto2D(
  v: [number, number, number, number],
  dist4: number,
  dist3: number
): [number, number, number] {
  // 4D → 3D stereographic projection
  const w = 1 / (dist4 - v[3]);
  const x3 = v[0] * w;
  const y3 = v[1] * w;
  const z3 = v[2] * w;

  // 3D → 2D perspective
  const p = 1 / (dist3 - z3);
  return [x3 * p, y3 * p, w]; // w for depth-based opacity
}

interface TesseractAnimationProps {
  activeRole?: string;
}

const TesseractAnimation = ({ activeRole = "Portfolio Managers" }: TesseractAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const roleRef = useRef(activeRole);
  const targetProfile = useRef(roleProfiles[activeRole] || roleProfiles["Portfolio Managers"]);
  const currentProfile = useRef({ ...targetProfile.current });

  useEffect(() => {
    roleRef.current = activeRole;
    targetProfile.current = roleProfiles[activeRole] || roleProfiles["Portfolio Managers"];
  }, [activeRole]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const startTime = performance.now();

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      const t = (now - startTime) * 0.001;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const dpr = window.devicePixelRatio || 1;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Smoothly lerp current profile toward target
      const cp = currentProfile.current;
      const tp = targetProfile.current;
      const lerp = 0.02;
      cp.xzSpeed += (tp.xzSpeed - cp.xzSpeed) * lerp;
      cp.xwSpeed += (tp.xwSpeed - cp.xwSpeed) * lerp;
      cp.ywSpeed += (tp.ywSpeed - cp.ywSpeed) * lerp;
      cp.distort += (tp.distort - cp.distort) * lerp;
      cp.pulse += (tp.pulse - cp.pulse) * lerp;

      const axz = t * cp.xzSpeed;
      const axw = t * cp.xwSpeed;
      const ayw = t * cp.ywSpeed;

      // Project all vertices
      const scale = Math.min(w, h) * 0.32;
      const cx = w * 0.5;
      const cy = h * 0.5;

      const projected: [number, number, number][] = baseVertices.map((v, i) => {
        // Add subtle per-vertex distortion
        const distortion: [number, number, number, number] = [
          Math.sin(t * 1.5 + i * 0.7) * cp.distort,
          Math.cos(t * 1.2 + i * 0.5) * cp.distort,
          Math.sin(t * 0.9 + i * 1.1) * cp.distort,
          Math.cos(t * 1.8 + i * 0.3) * cp.distort,
        ];

        // Pulse effect
        const pulseScale = 1 + Math.sin(t * 2 + i * 0.4) * cp.pulse;

        const dv: [number, number, number, number] = [
          (v[0] + distortion[0]) * pulseScale,
          (v[1] + distortion[1]) * pulseScale,
          (v[2] + distortion[2]) * pulseScale,
          (v[3] + distortion[3]) * pulseScale,
        ];

        const rotated = rotate4D(dv, axz, axw, ayw);
        const [px, py, depth] = project4Dto2D(rotated, 3, 3);
        return [cx + px * scale, cy + py * scale, depth];
      });

      // Read CSS primary color
      const style = getComputedStyle(canvas);
      const primary = style.getPropertyValue("--primary").trim();

      // Draw edges
      for (const [a, b] of edges) {
        const [x1, y1, d1] = projected[a];
        const [x2, y2, d2] = projected[b];

        const avgDepth = (d1 + d2) / 2;
        const opacity = Math.min(0.7, Math.max(0.08, avgDepth * 1.2));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsl(${primary} / ${opacity})`;
        ctx.lineWidth = Math.max(0.5, avgDepth * 1.5);
        ctx.stroke();
      }

      // Draw vertices as small dots
      for (const [px, py, depth] of projected) {
        const opacity = Math.min(0.9, Math.max(0.1, depth * 1.5));
        const radius = Math.max(1, depth * 3);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primary} / ${opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default TesseractAnimation;
