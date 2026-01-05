import Image from 'next/image';

export default function CompassHero({ x = 0, y = 0, scale = 1 }) {
  return (
    <div 
      className="relative w-full h-[700px] flex items-center justify-center overflow-hidden"
      style={{ transform: `translate(${x}px, ${y}px) scale(${scale})` }}
    >
      {/* Background/Base - Static */}
      <div className="relative w-[650px] h-[650px]">
        <Image 
          src="/dpv-offshore-redesign-website/images/compass-design.png"
          alt="Compass Base"
          fill
          className="object-contain opacity-90"
        />
        
        {/* Big Needle - shift right a bit, then spin */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="translate-x-[110px]">
            <div className="animate-spin-slow">
              <div className="relative w-[400px] h-[400px]">
                <Image 
                  src="/dpv-offshore-redesign-website/images/big-needl.png"
                  alt="Big Needle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Small Needle - shift right a bit, then spin reverse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="translate-x-[110px]">
            <div className="animate-spin-reverse-slow">
              <div className="relative w-[260px] h-[260px]">
                <Image 
                  src="/dpv-offshore-redesign-website/images/small-needls.png"
                  alt="Small Needle"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}