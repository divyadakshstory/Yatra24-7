export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="flex items-center justify-between px-6 lg:px-16 py-5 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold">
            Yatra<span className="text-green-600">24-7</span>
          </h1>
          <p className="text-sm text-gray-500">
            Premium Cab Service Bihar
          </p>
        </div>

        <a
          onClick={() => {
  const pickup =
    document.getElementById("pickup").value;

  const drop =
    document.getElementById("drop").value;

  const date =
    document.getElementById("date").value;

  const time =
    document.getElementById("time").value;

  const message =
    `🚖 New Cab Booking %0A%0A` +
    `📍 Pickup: ${pickup}%0A` +
    `📌 Drop: ${drop}%0A` +
    `📅 Date: ${date}%0A` +
    `⏰ Time: ${time}`;

  window.open(
    `https://wa.me/91YOURNUMBER?text=${message}`,
    "_blank"
  );
}}
          className="bg-green-600 text-white px-5 py-3 rounded-xl font-semibold"
        >
          WhatsApp Booking
        </a>
      </nav>

      <section className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-16 py-16 bg-green-50">
        <div>
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Trusted Taxi Service
          </p>

          <h2 className="text-5xl lg:text-7xl font-bold mt-4 leading-tight">
            Bihar’s Reliable
            <span className="text-green-600"> Cab Booking</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Airport transfers, outstation rides, local taxi service,
            and premium chauffeur booking.
          </p>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mt-10">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Pickup Location"
                className="border border-gray-200 rounded-2xl px-5 py-4"
              />

              <input
                placeholder="Drop Location"
                className="bg-gray-50 border-2 border-gray-100 rounded-2xl px-5 py-4 shadow-sm focus:border-green-500 focus:bg-white transition-all duration-300"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="date"
                className="border border-gray-200 rounded-2xl px-5 py-4"
              />

              <input
                type="time"
                className="border border-gray-200 rounded-2xl px-5 py-4"
              />
            </div>

            <a
              href="https://wa.me/918002697331"
              className="block text-center w-full mt-6 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
            alt="Cab"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  )
}
