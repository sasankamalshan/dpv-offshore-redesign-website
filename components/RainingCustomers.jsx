'use client';
import { useState, useEffect } from 'react';

export default function RainingCustomers() {
  const [drops, setDrops] = useState([]);

  // Generate random drops only on client side to avoid hydration mismatch
  useEffect(() => {
    const newDrops = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + 5, // Random position 5% to 95%
      delay: Math.random() * 5,     // Random delay 0s to 5s
      duration: Math.random() * 3 + 5, // Random duration 5s to 8s
      size: Math.random() * 20 + 60, // Size variation
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <h3 className="text-center pt-10 text-brand-orange font-bold text-xl uppercase tracking-widest z-10 relative">Our Customers</h3>
      
      {drops.map((drop) => (
        <button
          key={drop.id}
          className="absolute top-0 rounded-xl shadow-lg bg-brand-purple hover:bg-brand-orange transition-colors cursor-pointer flex items-center justify-center text-white font-bold text-xs animate-rain hover:pause"
          style={{
            left: `${drop.left}%`,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            animationDelay: `-${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            // Add 'animation-play-state: paused' on hover via CSS class if needed
          }}
          onClick={() => alert(`Clicked Customer ${drop.id + 1}`)}
        >
          {/* Placeholder for Logo */}
          Logo {drop.id + 1}
        </button>
      ))}
      
      {/* "Pause on hover" trick: Add this style globally or in CSS module if you want them to stop moving when hovered */}
      <style jsx>{`
        button:hover {
          animation-play-state: paused;
          z-index: 50;
        }
      `}</style>
    </div>
  );
}