'use client';
import { useEffect, useRef } from 'react';

export default function OfficeGlobe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.parentElement.offsetWidth;
    let height = canvas.height = 600;
    
    // Globe properties
    const globeRadius = 200;
    const dotRadius = 2;
    const dots = [];
    const DOT_COUNT = 400;

    // Initialize dots on a sphere
    for(let i=0; i<DOT_COUNT; i++) {
        const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
        const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
        dots.push({
            x: globeRadius * Math.cos(theta) * Math.sin(phi),
            y: globeRadius * Math.sin(theta) * Math.sin(phi),
            z: globeRadius * Math.cos(phi)
        });
    }

    let angle = 0;

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width/2, height/2);
        
        // Auto rotate
        angle += 0.005;

        dots.forEach(dot => {
            // Rotate Y axis
            let x = dot.x * Math.cos(angle) - dot.z * Math.sin(angle);
            let z = dot.z * Math.cos(angle) + dot.x * Math.sin(angle);
            let y = dot.y;

            // Simple 3D projection
            let scale = 300 / (300 + z); // Perspective
            let alpha = (z + globeRadius) / (2 * globeRadius); // Fade back dots
            
            ctx.beginPath();
            ctx.arc(x * scale, y * scale, dotRadius * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(93, 69, 219, ${alpha})`; // Brand Purple
            ctx.fill();
        });

        ctx.restore();
        requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
        if(canvasRef.current) {
            canvas.width = canvas.parentElement.offsetWidth;
        }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-20">
      <h2 className="text-brand-orange font-bold text-2xl mb-4">OUR OFFICE</h2>
      <p className="text-gray-500 mb-8">Global Reach, Local Presence.</p>
      <div className="w-full relative">
         <canvas ref={canvasRef} className="w-full h-[600px]" />
         {/* Optional Overlay Text */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <h3 className="text-4xl font-bold text-brand-dark/10">GLOBAL</h3>
         </div>
      </div>
    </div>
  );
}