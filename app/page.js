export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-[#fd4a01]">
            Yatra24x7
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#services">Services</a>
            <a href="#fleet">Fleet</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="https://wa.me/918002697331"
            target="_blank"
            className="bg-[#fd4a01] hover:bg-[#ff8860] text-black px-6 py-3 rounded-full font-bold"
          >
            Book Ride
          </a>

        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Cab"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="max-w-5xl relative z-10 text-center">

          <p className="uppercase tracking-[6px] text-[#fd4a01] mb-6">
            Premium Cab Service Bihar
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Premium cab booking for modern Bihar
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Safe, verified rides available 24x7 across Bihar with premium comfort and trusted drivers.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/918002697331"
              target="_blank"
              className="bg-[#fd4a01] text-black px-8 py-4 rounded-full font-bold"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918002697331"
              className="border border-white/30 px-8 py-4 rounded-full"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
