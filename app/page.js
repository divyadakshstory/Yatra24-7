"use client";

import { useState } from "react";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [car, setCar] = useState("Mini");

  const whatsappLink = () => {
    const msg =
`🚖 *Yatra24-7 Cab Booking*

📍 Pickup Location:
${pickup}

📌 Drop Location:
${drop}

🚘 Selected Cab:
${car}

📅 Journey Date:
${date}

⏰ Pickup Time:
${time}

━━━━━━━━━━━━━━
Customer booked from website`;

    return `https://wa.me/918002697331?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[140px]" />

      {/* Navbar */}

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl">

        <h1 className="text-3xl font-extrabold tracking-wide text-green-400">
          Yatra24-7
        </h1>

        <a
          href={whatsappLink()}
          target="_blank"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all duration-300"
        >
          Book Cab
        </a>

      </nav>

      {/* Hero */}

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm mb-8">
            🚖 Trusted Cab Service Across Bihar
          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            Premium
            <span className="text-green-400"> Cab </span>
            Booking
            <br />
            Experience
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">
            Fast, secure and premium cab rides for airport transfers,
            outstation trips, family travel and city rides.
          </p>

          {/* Booking Card */}

          <div className="mt-12 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-7 shadow-2xl">

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-5 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all"
              />

              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-5 placeholder-gray-400 focus:outline-none focus:border-green-500 transition-all"
              />

              {/* Car Selection */}

              <div>

                <h3 className="text-lg font-semibold mb-4">
                  Choose Cab Type
                </h3>

                <div className="grid grid-cols-3 gap-4">

                  <button
                    onClick={() => setCar("Mini")}
                    className={`rounded-3xl p-5 border transition-all duration-300 ${
                      car === "Mini"
                        ? "bg-green-500 border-green-500 scale-105"
                        : "bg-white/5 border-white/10 hover:border-green-500"
                    }`}
                  >
                    <div className="text-3xl">🚗</div>

                    <h4 className="font-bold mt-3">
                      Mini
                    </h4>

                    <p className="text-xs text-gray-300 mt-1">
                      Budget Ride
                    </p>
                  </button>

                  <button
                    onClick={() => setCar("Sedan")}
                    className={`rounded-3xl p-5 border transition-all duration-300 ${
                      car === "Sedan"
                        ? "bg-green-500 border-green-500 scale-105"
                        : "bg-white/5 border-white/10 hover:border-green-500"
                    }`}
                  >
                    <div className="text-3xl">🚘</div>

                    <h4 className="font-bold mt-3">
                      Sedan
                    </h4>

                    <p className="text-xs text-gray-300 mt-1">
                      Premium Comfort
                    </p>
                  </button>

                  <button
                    onClick={() => setCar("SUV")}
                    className={`rounded-3xl p-5 border transition-all duration-300 ${
                      car === "SUV"
                        ? "bg-green-500 border-green-500 scale-105"
                        : "bg-white/5 border-white/10 hover:border-green-500"
                    }`}
                  >
                    <div className="text-3xl">🚙</div>

                    <h4 className="font-bold mt-3">
                      SUV
                    </h4>

                    <p className="text-xs text-gray-300 mt-1">
                      Family Ride
                    </p>
                  </button>

                </div>

              </div>

              {/* Date Time */}

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-green-500 transition-all"
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-green-500 transition-all"
                />

              </div>

              {/* Button */}

              <a
                href={whatsappLink()}
                target="_blank"
                className="block text-center bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                Book on WhatsApp
              </a>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
            alt="Cab"
            className="rounded-[40px] shadow-[0_0_60px_rgba(0,255,100,0.2)] w-full h-[750px] object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl px-7 py-5">

            <h3 className="text-2xl font-bold">
              24×7 Available
            </h3>

            <p className="text-gray-300 mt-2">
              Safe • Fast • Trusted Rides
            </p>

          </div>

        </div>

      </section>

      {/* Floating WhatsApp */}

      <a
        href={whatsappLink()}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white text-3xl p-5 rounded-full shadow-[0_0_30px_rgba(0,255,100,0.5)] transition-all duration-300 hover:scale-110 z-50"
      >
        💬
      </a>

    </main>
  );
}
