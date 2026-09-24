import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  decay: number;
  color: string;
  angle: number;
  spin: number;
  isSpark?: boolean;
}

export const SmokeEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    let lastX = 0;
    let lastY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const smokeColors = [
      'rgba(168, 85, 247, ',   // Purple
      'rgba(236, 72, 153, ',   // Pink
      'rgba(99, 102, 241, ',   // Indigo
      'rgba(6, 182, 212, ',    // Cyan
      'rgba(192, 132, 252, ',  // Lavender
    ];

    // Billowing smoke cloud burst (on click)
    const createSmokeBurst = (x: number, y: number) => {
      const count = 18;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 0.5;
        const color = smokeColors[Math.floor(Math.random() * smokeColors.length)];

        particles.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - Math.random() * 1.5,
          radius: Math.random() * 15 + 10,
          maxRadius: Math.random() * 55 + 40,
          alpha: Math.random() * 0.45 + 0.4,
          decay: Math.random() * 0.012 + 0.01,
          color: color,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.04,
          isSpark: false,
        });
      }

      // Sparks on burst
      const sparkCount = 8;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          radius: Math.random() * 2.5 + 1.5,
          maxRadius: 4,
          alpha: 0.9,
          decay: Math.random() * 0.03 + 0.02,
          color: 'rgba(255, 255, 255, ',
          angle: 0,
          spin: 0,
          isSpark: true,
        });
      }
    };

    // Continuous trailing smoke wisps (on mouse move / cursor adjustment)
    const createSmokeTrail = (x: number, y: number, vx: number, vy: number) => {
      const count = 3;
      for (let i = 0; i < count; i++) {
        const color = smokeColors[Math.floor(Math.random() * smokeColors.length)];
        const spreadAngle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;

        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: vx * 0.15 + Math.cos(spreadAngle) * speed,
          vy: vy * 0.15 + Math.sin(spreadAngle) * speed - 0.4, // gentle upward drift
          radius: Math.random() * 8 + 6,
          maxRadius: Math.random() * 32 + 20,
          alpha: Math.random() * 0.28 + 0.2,
          decay: Math.random() * 0.01 + 0.008,
          color: color,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.03,
          isSpark: false,
        });
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      createSmokeBurst(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only spawn when mouse has moved at least 6px
      if (dist > 6) {
        createSmokeTrail(e.clientX, e.clientY, dx, dy);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createSmokeBurst(touch.clientX, touch.clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 6) {
          createSmokeTrail(touch.clientX, touch.clientY, dx, dy);
          lastX = touch.clientX;
          lastY = touch.clientY;
        }
      }
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96; // drag
        p.vy *= 0.96;
        p.vy -= 0.03; // upward float
        p.alpha -= p.decay;
        p.angle += p.spin;

        if (p.isSpark) {
          p.radius *= 0.96;
        } else {
          if (p.radius < p.maxRadius) {
            p.radius += 0.6;
          }
        }

        if (p.alpha <= 0 || p.radius <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.isSpark) {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.shadowColor = '#ec4899';
          ctx.shadowBlur = 8;
          ctx.fill();
        } else {
          // Soft radial smoke gradient
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
          grad.addColorStop(0, `${p.color}${p.alpha})`);
          grad.addColorStop(0.4, `${p.color}${p.alpha * 0.55})`);
          grad.addColorStop(1, `${p.color}0)`);

          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
