import { useEffect, useRef } from "react";

// 4D hypercube (tesseract): 16 vertices, all combos of ±1 in 4D
const baseVertices: [number, number, number, number][] = [];
for (let i = 0; i < 16; i++) {
  baseVertices.push([
    (i & 1) ? 1 : -1,
    (i & 2) ? 1 : -1,
    (i & 4) ? 1 : -1,
    (i & 8) ? 1 : -1,
  ]);
}

// Edges: vertices differing in exactly one coordinate
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
  const w = 1 / (dist4 - v[3]);
  const x3 = v[0] * w;
  const y3 = v[1] * w;
  const z3 = v[2] * w;

  const p = 1 / (dist3 - z3);
  return [x3 * p, y3 * p, w];
}

const TesseractAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

      // Very slow, steady rotations — clean geometric feel
      const axz = t * 0.12;
      const axw = t * 0.08;
      const ayw = t * 0.06;

      const scale = Math.min(w, h) * 0.30;
      const cx = w * 0.5;
      const cy = h * 0.5;

      const projected: [number, number, number][] = baseVertices.map((v) => {
        const rotated = rotate4D(v, axz, axw, ayw);
        const [px, py, depth] = project4Dto2D(rotated, 3.5, 3.5);
        return [cx + px * scale, cy + py * scale, depth];
      });

      // Read CSS primary color
      const style = getComputedStyle(canvas);
      const primary = style.getPropertyValue("--primary").trim();

      // Draw edges — thin, clean wireframe
      for (const [a, b] of edges) {
        const [x1, y1, d1] = projected[a];
        const [x2, y2, d2] = projected[b];

        const avgDepth = (d1 + d2) / 2;
        const opacity = Math.min(0.65, Math.max(0.12, avgDepth * 1.4));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `hsl(${primary} / ${opacity})`;
        ctx.lineWidth = Math.max(0.6, avgDepth * 1.2);
        ctx.stroke();
      }

      // Small vertex dots
      for (const [px, py, depth] of projected) {
        const opacity = Math.min(0.8, Math.max(0.15, depth * 1.5));
        const radius = Math.max(1.2, depth * 2.5);

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
