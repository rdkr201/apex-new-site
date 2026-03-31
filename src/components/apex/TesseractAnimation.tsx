import { useEffect, useRef } from "react";

// 3D wireframe letter "A" — vertices define the front and back faces of an extruded A
const depth = 0.3;

// Front face of the "A" (z = -depth)
// Outer shape: two legs meeting at apex, with crossbar
const frontOuter: [number, number, number][] = [
  [-0.6, 1, -depth],   // 0: bottom-left outer
  [-0.2, 1, -depth],   // 1: bottom-left inner
  [-0.05, 0.45, -depth], // 2: crossbar-left inner
  [0.05, 0.45, -depth],  // 3: crossbar-right inner
  [0.2, 1, -depth],    // 4: bottom-right inner
  [0.6, 1, -depth],    // 5: bottom-right outer
  [0.0, -1, -depth],   // 6: apex
];

// Crossbar front
const frontCross: [number, number, number][] = [
  [-0.35, 0.55, -depth], // 7: crossbar bottom-left
  [0.35, 0.55, -depth],  // 8: crossbar bottom-right
  [0.3, 0.35, -depth],   // 9: crossbar top-right
  [-0.3, 0.35, -depth],  // 10: crossbar top-left
];

// Back face (z = +depth) — same x,y, different z
const backOuter: [number, number, number][] = frontOuter.map(([x, y]) => [x, y, depth]);
const backCross: [number, number, number][] = frontCross.map(([x, y]) => [x, y, depth]);

const vertices: [number, number, number][] = [
  ...frontOuter,   // 0-6
  ...frontCross,   // 7-10
  ...backOuter,    // 11-17
  ...backCross,    // 18-21
];

// Edges connecting the wireframe
const edges: [number, number][] = [
  // Front outer A shape
  [0, 6], [6, 5],  // outer legs
  [0, 1], [4, 5],  // bottom bars
  [1, 6], [4, 6],  // inner legs
  [1, 2], [3, 4],  // inner leg to crossbar gap

  // Front crossbar
  [7, 8], [8, 9], [9, 10], [10, 7],

  // Back outer A shape
  [11, 17], [17, 16],
  [11, 12], [15, 16],
  [12, 17], [15, 17],
  [12, 13], [14, 15],

  // Back crossbar
  [18, 19], [19, 20], [20, 21], [21, 18],

  // Depth connections — outer
  [0, 11], [1, 12], [2, 13], [3, 14], [4, 15], [5, 16], [6, 17],

  // Depth connections — crossbar
  [7, 18], [8, 19], [9, 20], [10, 21],
];

// Additional internal structure lines for complexity
const internalEdges: [number, number][] = [
  [0, 17], [5, 17],
  [6, 11], [6, 16],
  [2, 14], [3, 13],
  [7, 20], [10, 19],
  [1, 17], [4, 17],
  // Additional vertical structural lines (front)
  [6, 2], [6, 3], [6, 7], [6, 10], [6, 9], [6, 8],
  [0, 10], [5, 9], [1, 7], [4, 8],
  // Additional vertical structural lines (back)
  [17, 13], [17, 14], [17, 18], [17, 21], [17, 20], [17, 19],
  [11, 21], [16, 20], [12, 18], [15, 19],
  // Cross-depth vertical connectors
  [0, 12], [5, 15], [1, 11], [4, 16],
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
