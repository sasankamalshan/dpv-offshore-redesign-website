// components/CallToAction.jsx
export default function CallToAction() {
    return (
      <section className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto bg-[#FFF0E0] rounded-3xl p-12 flex flex-col justify-center min-h-[400px] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-orange leading-tight mb-6">
            Ready to Get<br />
            Smarter and Faster<br />
            Service?
          </h1>
          <div>
            <button className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-colors">
              Start Chat Now
            </button>
          </div>
        </div>
      </section>
    );
  }