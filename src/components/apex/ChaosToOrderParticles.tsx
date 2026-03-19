import { useEffect, useRef, useCallback } from "react";

const PARTICLE_COUNT = 60;
const CYCLE_DURATION = 8000; // ms for one full chaos→order cycle
const HOLD_DURATION = 2000; // ms to hold the ordered state
const TOTAL_CYCLE = CYCLE_DURATION + HOLD_DURATION;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  radius: number;
}

const ChaosToOrderParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    const pad = 20;
    const innerW = w - pad * 2;
    const innerH = h - pad * 2;

    // Compute grid targets
    const cols = Math.ceil(Math.sqrt(PARTICLE_COUNT * (innerW / innerH)));
    const rows = Math.ceil(PARTICLE_COUNT / cols);
    const cellW = innerW / cols;
    const cellH = innerH / rows;

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      particles.push({
        x: pad + Math.random() * innerW,
        y: pad + Math.random() * innerH,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        targetX: pad + col * cellW + cellW / 2,
        targetY: pad + row * cellH + cellH / 2,
        radius: 2 + Math.random() * 1.5,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    resize();
    startTimeRef.current = performance.now();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const animate = (now: number) => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) { animRef.current = requestAnimationFrame(animate); return; }

      const w = rect.width;
      const h = rect.height;
      const elapsed = (now - startTimeRef.current) % TOTAL_CYCLE;
      // t goes from 0 (full chaos) to 1 (full order)
      const rawT = Math.min(elapsed / CYCLE_DURATION, 1);
      // Smooth easing
      const t = rawT < 0.5
        ? 4 * rawT * rawT * rawT
        : 1 - Math.pow(-2 * rawT + 2, 3) / 2;

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const pad = 20;

      for (const p of particles) {
        // Brownian motion update (scaled down as t increases)
        const chaosScale = 1 - t;
        p.vx += (Math.random() - 0.5) * 0.8 * chaosScale;
        p.vy += (Math.random() - 0.5) * 0.8 * chaosScale;
        // Damping
        p.vx *= 0.96;
        p.vy *= 0.96;
        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 2.5 * chaosScale + 0.01;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Move with chaos
        const chaosX = p.x + p.vx;
        const chaosY = p.y + p.vy;

        // Bounce off walls
        if (chaosX < pad || chaosX > w - pad) p.vx *= -1;
        if (chaosY < pad || chaosY > h - pad) p.vy *= -1;

        p.x = Math.max(pad, Math.min(w - pad, chaosX));
        p.y = Math.max(pad, Math.min(h - pad, chaosY));

        // Lerp toward target based on t
        const drawX = p.x + (p.targetX - p.x) * t;
        const drawY = p.y + (p.targetY - p.y) * t;

        // Opacity: brighter as they settle
        const alpha = 0.2 + t * 0.5;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(174, 42%, 45%, ${alpha})`;
        ctx.fill();
      }

      // Draw connections in ordered state
      if (t > 0.6) {
        const connAlpha = (t - 0.6) / 0.4 * 0.15;
        ctx.strokeStyle = `hsla(174, 42%, 45%, ${connAlpha})`;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          const ax = a.x + (a.targetX - a.x) * t;
          const ay = a.y + (a.targetY - a.y) * t;
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const bx = b.x + (b.targetX - b.x) * t;
            const by = b.y + (b.targetY - b.y) * t;
            const dist = Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2);
            if (dist < 50) {
              ctx.beginPath();
              ctx.moveTo(ax, ay);
              ctx.lineTo(bx, by);
              ctx.stroke();
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ChaosToOrderParticles;
