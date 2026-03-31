import { useEffect, useRef } from "react";

// 3D wireframe letter "A" — vertices define the front and back faces of an extruded A
const depth = 0.3;

// Front face of the "A" (z = -depth)
// Outer shape: two legs meeting at apex, with crossbar
const frontOuter: [number, number, number][] = [
  [-0.6, 1, -depth],     // 0: bottom-left outer
  [-0.2, 1, -depth],     // 1: bottom-left inner
  [-0.05, 0.45, -depth], // 2: crossbar-left inner
  [0.05, 0.45, -depth],  // 3: crossbar-right inner
  [0.2, 1, -depth],      // 4: bottom-right inner
  [0.6, 1, -depth],      // 5: bottom-right outer
  [0.0, -1, -depth],     // 6: apex
];

// Crossbar front
const frontCross: [number, number, number][] = [
  [-0.35, 0.55, -depth], // 7: crossbar bottom-left
  [0.35, 0.55, -depth],  // 8: crossbar bottom-right
  [0.3, 0.35, -depth],   // 9: crossbar top-right
  [-0.3, 0.35, -depth],  // 10: crossbar top-left
];

// Mid-leg points for subdivisions (front)
const frontMidPoints: [number, number, number][] = [
  [-0.45, 0.7, -depth],  // 11f → 22: mid outer-left leg
  [-0.15, 0.7, -depth],  // 12f → 23: mid inner-left leg
  [0.15, 0.7, -depth],   // 13f → 24: mid inner-right leg
  [0.45, 0.7, -depth],   // 14f → 25: mid outer-right leg
  [-0.22, 0.1, -depth],  // 15f → 26: upper-left leg
  [0.22, 0.1, -depth],   // 16f → 27: upper-right leg
  [-0.12, -0.3, -depth], // 17f → 28: near-apex left
  [0.12, -0.3, -depth],  // 18f → 29: near-apex right
  [0.0, -0.6, -depth],   // 19f → 30: sub-apex
  [-0.4, 0.85, -depth],  // 20f → 31: quarter outer-left
  [0.4, 0.85, -depth],   // 21f → 32: quarter outer-right
];

// Back face (z = +depth)
const backOuter: [number, number, number][] = frontOuter.map(([x, y]) => [x, y, depth]);
const backCross: [number, number, number][] = frontCross.map(([x, y]) => [x, y, depth]);
const backMidPoints: [number, number, number][] = frontMidPoints.map(([x, y]) => [x, y, depth]);

const vertices: [number, number, number][] = [
  ...frontOuter,    // 0-6
  ...frontCross,    // 7-10
  ...backOuter,     // 11-17
  ...backCross,     // 18-21
  ...frontMidPoints, // 22-32
  ...backMidPoints,  // 33-43
];

// Main structural edges
const edges: [number, number][] = [
  // Front outer A shape
  [0, 6], [6, 5], [0, 1], [4, 5], [1, 6], [4, 6], [1, 2], [3, 4],
  // Front crossbar
  [7, 8], [8, 9], [9, 10], [10, 7],
  // Back outer A shape
  [11, 17], [17, 16], [11, 12], [15, 16], [12, 17], [15, 17], [12, 13], [14, 15],
  // Back crossbar
  [18, 19], [19, 20], [20, 21], [21, 18],
  // Depth connections — outer
  [0, 11], [1, 12], [2, 13], [3, 14], [4, 15], [5, 16], [6, 17],
  // Depth connections — crossbar
  [7, 18], [8, 19], [9, 20], [10, 21],
  // Depth connections — midpoints
  [22, 33], [23, 34], [24, 35], [25, 36], [26, 37], [27, 38], [28, 39], [29, 40], [30, 41], [31, 42], [32, 43],
];

// Internal/structural edges for sophistication
const internalEdges: [number, number][] = [
  // Cross-depth diagonals (base)
  [0, 17], [5, 17], [6, 11], [6, 16], [1, 17], [4, 17],
  // Crossbar cross-depth
  [2, 14], [3, 13], [7, 20], [10, 19], [8, 21], [9, 18],
  // Front subdivisions — horizontal ribs
  [22, 23], [24, 25], [22, 25], // mid-leg horizontal
  [26, 27],                      // upper horizontal
  [28, 29],                      // near-apex horizontal
  [31, 23], [24, 32],            // quarter connections
  // Front subdivisions — leg segments
  [0, 22], [22, 6], [1, 23], [23, 6], [4, 24], [24, 6], [5, 25], [25, 6],
  [22, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 30], [30, 6],
  [23, 26], [24, 27],
  // Back subdivisions — horizontal ribs
  [33, 34], [35, 36], [33, 36],
  [37, 38], [39, 40],
  [42, 34], [35, 43],
  // Back subdivisions — leg segments
  [11, 33], [33, 17], [12, 34], [34, 17], [15, 35], [35, 17], [16, 36], [36, 17],
  [33, 37], [36, 38], [37, 39], [38, 40], [39, 41], [40, 41], [41, 17],
  [34, 37], [35, 38],
  // Cross-depth diagonals on midpoints
  [22, 36], [25, 33], [26, 38], [27, 37], [28, 40], [29, 39], [30, 17],
  [31, 43], [32, 42],
  // Triangulation — front face inner
  [22, 24], [23, 25], [26, 29], [27, 28],
  [7, 26], [9, 27], [10, 26], [8, 27],
  // Cross-face diagonals
  [22, 34], [25, 36], [23, 35], [24, 33],
];

const allEdges = [...edges, ...internalEdges];

function rotateY(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a);
  return [v[0] * c + v[2] * s, v[1], -v[0] * s + v[2] * c];
}

function rotateX(v: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a), s = Math.sin(a);
  return [v[0], v[1] * c - v[2] * s, v[1] * s + v[2] * c];
}

function project(v: [number, number, number], dist: number): [number, number, number] {
  const perspective = dist / (dist + v[2]);
  return [v[0] * perspective, v[1] * perspective, perspective];
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

      // Slow rotation
      const angleY = t * 0.15;
      const angleX = Math.sin(t * 0.08) * 0.15; // gentle tilt

      const scale = Math.min(w, h) * 0.38;
      const cx = w * 0.5;
      const cy = h * 0.5;

      // Transform all vertices
      const projected = vertices.map((v) => {
        let rv = rotateY(v, angleY);
        rv = rotateX(rv, angleX);
        const [px, py, depth] = project(rv, 4);
        return [cx + px * scale, cy + py * scale, depth] as [number, number, number];
      });

      // Draw internal edges first (dimmer)
      const internalStart = edges.length;
      for (let i = internalStart; i < allEdges.length; i++) {
        const [a, b] = allEdges[i];
        const [x1, y1, d1] = projected[a];
        const [x2, y2, d2] = projected[b];
        const avgDepth = (d1 + d2) / 2;
        const opacity = Math.min(0.2, Math.max(0.05, (avgDepth - 0.7) * 0.5));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw main edges
      for (let i = 0; i < edges.length; i++) {
        const [a, b] = allEdges[i];
        const [x1, y1, d1] = projected[a];
        const [x2, y2, d2] = projected[b];
        const avgDepth = (d1 + d2) / 2;
        const opacity = Math.min(0.55, Math.max(0.1, (avgDepth - 0.5) * 0.8));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.lineWidth = Math.max(0.8, avgDepth * 1.2);
        ctx.stroke();
      }

      // Draw vertices
      for (const [px, py, depth] of projected) {
        const opacity = Math.min(0.6, Math.max(0.1, (depth - 0.5) * 0.8));
        const radius = Math.max(1, depth * 2);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
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
    <div className="pointer-events-none absolute top-0 right-0 h-full w-[55%]">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default TesseractAnimation;
