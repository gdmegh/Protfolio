
'use client';

import { useState, useEffect } from 'react';

export function MouseFollower() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-300"
      style={{
        background: `radial-gradient(400px at ${position.x}px ${position.y}px, hsla(var(--primary) / 0.25), transparent 80%)`,
      }}
    />
  );
}
