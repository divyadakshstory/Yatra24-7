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
  href="https://wa.me/918002697331?text=Hello%20Yatra24x7,%20I%20want%20to%20book%20a%20ride."
  target="_blank"
  className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-black px-8 py-4 rounded-full font-bold transition-all"
>
  Book on WhatsApp
</a>

        <a
  href="tel:+918002697331"
  className="border border-gray-500 px-8 py-4 rounded-full hover:border-[#ff5e00] transition-all"
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

<div className="text-sm text-gray-400 mb-2">
  Select Date
</div>
                
  <input
  id="date"
  type="date"
  className="bg-black border border-gray-700 rounded-xl p-4 outline-none text-white"
/>

   <div className="text-sm text-gray-400 mb-2">
  Select Time
</div> 
  
  <input
  id="time"
  type="time"
  className="bg-black border border-gray-700 rounded-xl p-4 outline-none text-white"
/>

<select
  id="car"
  className="bg-black border border-gray-700 rounded-xl p-4 outline-none md:col-span-2"
>
<option>Choose Vehicle Type</option>
  <option>Sedan • Swift Dzire / Aura</option>
  <option>SUV • Ertiga / Scorpio</option>
  <option>Premium • Innova Crysta</option>
</select>

          </div>

          <div className="text-center mt-10">

          <button
  onClick={() => {
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const formattedTime = new Date(
  `1970-01-01T${time}`
).toLocaleTimeString([], {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
    const car = document.getElementById("car").value;

const message = `🚖 Yatra24x7 Booking

📍 Pickup: ${pickup}
📍 Drop: ${drop}

🚘 Vehicle: ${car}

📅 Date: ${date}
⏰ Time: ${formattedTime}`;

const url = `https://wa.me/918002697331?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");
  }}
  className="bg-[#ff5e00] hover:bg-[#ff7b2b] text-black font-bold px-10 py-4 rounded-full transition-all"
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
  className="bg-[#070b14] py-24 px-6 border-t border-gray-800"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT SIDE */}

    <div>

      <p className="text-[#ff6b00] uppercase tracking-[5px] text-sm mb-4">
        Contact
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
        Bihar’s Premium
        <br />
        Cab Service
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
        Reach us anytime for airport transfers, wedding rides,
        business trips and outstation travel across Bihar.
      </p>

      <div className="mt-10 space-y-4 text-gray-300">

        <div className="flex items-center gap-4">
          <span className="text-[#ff6b00] text-xl">📞</span>
          <span>+91 8002697331</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#ff6b00] text-xl">📍</span>
          <span>Patna, Bihar</span>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE */}

    <div className="bg-[#0f1724] border border-gray-800 rounded-3xl p-10">

      <h3 className="text-3xl font-bold text-white mb-6">
        Connect With Us
      </h3>

      <p className="text-gray-400 mb-8">
        Follow Yatra24x7 on social platforms and book rides instantly on WhatsApp.
      </p>
<div className="flex gap-6 mt-8">

  {/* FACEBOOK */}
  <a
    href="https://www.facebook.com/profile.php?id=61589987597600"
    target="_blank"
    className="text-white text-4xl hover:text-[#1877F2] transition-all duration-300"
  >
    <i className="fab fa-facebook"></i>
  </a>

  {/* INSTAGRAM */}
  <a
    href="https://www.instagram.com/yatra24.7?igsh=amRkY2IweXFiY3g3"
    target="_blank"
    className="text-white text-4xl hover:text-pink-500 transition-all duration-300"
  >
    <i className="fab fa-instagram"></i>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/918002697331"
    target="_blank"
    className="text-white text-4xl hover:text-[#25D366] transition-all duration-300"
  >
    <i className="fab fa-whatsapp"></i>
  </a>

</div>

      <div className="mt-10 pt-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Yatra24x7. All rights reserved.
      </div>

    </div>

  </div>
</section>

    </main>
  );
}
