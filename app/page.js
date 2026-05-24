"use client";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-black text-[#fd4a01]">
            Yatra24x7
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#services" className="hover:text-[#fd4a01]">Services</a>
            <a href="#fleet" className="hover:text-[#fd4a01]">Fleet</a>
            <a href="#reviews" className="hover:text-[#fd4a01]">Reviews</a>
            <a href="#contact" className="hover:text-[#fd4a01]">Contact</a>
          </div>

          <a
            href="https://wa.me/918002697331"
            target="_blank"
            className="bg-[#fd4a01] hover:bg-[#ff7b42] text-black px-6 py-3 rounded-full font-black transition-all"
          >
            Book Ride
          </a>

        </div>
      </nav>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop"
          alt="Luxury Car"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-6xl relative z-10 text-center">

          <p className="uppercase tracking-[6px] text-[#fd4a01] mb-6 font-bold">
            PREMIUM CAB SERVICE BIHAR
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Bihar ki trusted premium ride service
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
            From Saharsa to Patna, Darbhanga to Purnea — premium rides with trusted local drivers available 24x7.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/918002697331"
              target="_blank"
              className="bg-[#fd4a01] hover:bg-[#ff7b42] text-black px-8 py-4 rounded-full font-black text-lg"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918002697331"
              className="border border-white/30 px-8 py-4 rounded-full text-lg"
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

      {/* BOOKING */}

      <section id="services" className="bg-[#111] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-[#fd4a01] uppercase tracking-[4px] mb-4 font-bold">
              Smart Booking
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Book your Bihar ride instantly
            </h2>

            <p className="text-gray-400">
              Airport pickup, wedding rides, local booking & outstation travel.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              id="pickup"
              placeholder="Pickup Location"
              className="bg-black border border-gray-700 rounded-xl p-4 outline-none"
            />

            <input
              id="drop"
              placeholder="Drop Location"
              className="bg-black border border-gray-700 rounded-xl p-4 outline-none"
            />

            <input
              id="date"
              type="date"
              className="bg-black border border-gray-700 rounded-xl p-4 outline-none"
            />

            <input
              id="time"
              type="time"
              className="bg-black border border-gray-700 rounded-xl p-4 outline-none"
            />

            <select
              id="car"
              className="bg-black border border-gray-700 rounded-xl p-4 outline-none md:col-span-2"
            >
              <option>Select Vehicle</option>
              <option>Swift Dzire</option>
              <option>Ertiga</option>
              <option>Scorpio</option>
              <option>Innova Crysta</option>
              <option>Fortuner</option>
            </select>

          </div>

          <div className="text-center mt-10">

            <button
              onClick={() => {
                const pickup = document.getElementById("pickup").value;
                const drop = document.getElementById("drop").value;
                const date = document.getElementById("date").value;
                const time = document.getElementById("time").value;
                const car = document.getElementById("car").value;

                const message =
                  `🚖 Yatra24x7 Booking Request\n\n` +
                  `Pickup: ${pickup}\n` +
                  `Drop: ${drop}\n` +
                  `Date: ${date}\n` +
                  `Time: ${time}\n` +
                  `Vehicle: ${car}`;

                window.open(
                  `https://wa.me/918002697331?text=${encodeURIComponent(message)}`
                );
              }}
              className="bg-[#fd4a01] hover:bg-[#ff7b42] text-black px-10 py-4 rounded-full font-black text-lg transition-all"
            >
              Get Price on WhatsApp
            </button>

          </div>

        </div>

      </section>

      {/* FLEET */}

      <section id="fleet" className="py-24 bg-black px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#fd4a01] uppercase tracking-[4px] mb-4 font-bold">
              Our Fleet
            </p>

            <h2 className="text-5xl font-black">
              Premium rides for every journey
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">

              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Swift Dzire
                </h3>

                <p className="text-gray-400">
                  Comfortable city rides & affordable travel.
                </p>

              </div>

            </div>

            <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">

              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Scorpio
                </h3>

                <p className="text-gray-400">
                  Premium SUV for long-distance Bihar rides.
                </p>

              </div>

            </div>

            <div className="bg-[#111] rounded-3xl overflow-hidden border border-gray-800">

              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Innova Crysta
                </h3>

                <p className="text-gray-400">
                  Family, wedding & airport trip specialist.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REVIEWS */}

      <section id="reviews" className="bg-[#111] py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-[#fd4a01] uppercase tracking-[4px] mb-4 font-bold">
              Real Reviews
            </p>

            <h2 className="text-5xl font-black">
              Trusted by Bihar riders
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-black border border-gray-800 rounded-3xl p-8">

              <p className="text-gray-300 text-lg leading-8 mb-6">
                “Patna airport pickup bahut smooth tha. Driver time pe aaya aur gaadi bilkul clean thi.”
              </p>

              <h4 className="text-xl font-bold">
                Ravi Kumar
              </h4>

              <p className="text-gray-500">
                Patna
              </p>

            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-8">

              <p className="text-gray-300 text-lg leading-8 mb-6">
                “Wedding booking ke liye 3 gaadi li thi. Service professional aur pricing bhi reasonable tha.”
              </p>

              <h4 className="text-xl font-bold">
                Aman Jha
              </h4>

              <p className="text-gray-500">
                Saharsa
              </p>

            </div>

          </div>

        </div>

      </section>

   {/* CONTACT SECTION */}

<section
  id="contact"
  className="py-24 px-6 bg-gradient-to-b from-black to-[#111827] text-white"
>
  <div className="max-w-6xl mx-auto text-center">

    <p className="uppercase tracking-[6px] text-[#ff6b00] text-sm mb-4">
      Connect With Us
    </p>

    <h2 className="text-5xl font-black mb-6">
      Contact Yatra24x7
    </h2>

    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
      Premium cab booking service across Bihar.  
      Safe rides, verified drivers and instant WhatsApp support.
    </p>

    <div className="flex justify-center gap-6 flex-wrap">

      <a
        href="https://www.instagram.com/yatra24.7?igsh=amRkY2IweXFiY3g3"
        target="_blank"
        className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-3xl hover:bg-[#E1306C] transition-all duration-300"
      >
        📸
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61589987597600"
        target="_blank"
        className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-3xl hover:bg-[#1877F2] transition-all duration-300"
      >
        👍
      </a>

      <a
        href="https://wa.me/918002697331"
        target="_blank"
        className="w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center text-3xl hover:bg-[#25D366] transition-all duration-300"
      >
        💬
      </a>

    </div>

    <div className="mt-10 space-y-2 text-gray-400">
      <p>📞 +91 8002697331</p>
      <p>📍 Bihar Premium Cab Service</p>
    </div>

    <div className="mt-12 text-gray-500 text-sm">
      © 2026 Yatra24x7. All rights reserved.
    </div>

  </div>
</section>

    </main>
  );
}
