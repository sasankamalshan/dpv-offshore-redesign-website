import CompassHero from "@/components/CompassHero";
import RainingCustomers from "@/components/RainingCustomers";
import OfficeGlobe from "@/components/OfficeGlobe";
import CallToAction from "@/components/CallToAction";
import AboutUsSection from "@/components/AboutUsSection";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-purple-50">
        <div className="absolute inset-4 md:inset-8 border-4 border-brand-orange rounded-[3rem] pointer-events-none"></div>

        <div className="relative w-full max-w-[1400px] mx-auto px-6 py-12 flex items-center justify-between">
          <div className="flex items-center justify-start w-1/4">
            <h1 className="text-[120px] font-bold text-brand-orange leading-none opacity-80"></h1>
          </div>

          <div className="flex justify-center items-center flex-1">
            <CompassHero x={250} y={0} scale={1.5} />
          </div>

          <div className="w-1/4"></div>
        </div>
      </section>

      {/* About Us */}
      <AboutUsSection />

      {/* 3D Office Globe */}
      <OfficeGlobe />

      {/* Raining Customers */}
      <RainingCustomers />

      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
