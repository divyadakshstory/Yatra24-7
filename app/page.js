export default function Home() {
  const cabTypes = [
    { name: "Mini", price: "₹149", desc: "Affordable city rides" },
    { name: "Sedan", price: "₹249", desc: "Comfortable premium rides" },
    { name: "SUV", price: "₹399", desc: "Large family rides" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10">
        <h1 className="text-3xl font-bold">
          Yatra<span className="text-green-400">24-7</span>
        </h1>

        <button className="bg-green-400 text-black px-5 py-2 rounded-xl font-bold">
          Book Cab
        </button>
      </nav>

      <section className="px-8 lg:px-20 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-6xl font-bold leading-tight">
            Premium Cab Booking For Modern India
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            Fast rides, verified drivers, airport transfers, corporate travel,
            and luxury cab experience.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mt-10">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Pickup Location"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4"
              />

              <input
                placeholder="Drop Location"
                className="bg-black border border-white/10 rounded-2xl px-5 py-4"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-5">
              {cabTypes.map((cab) => (
                <div
                  key={cab.name}
                  className="border border-white/10 rounded-2xl p-5 bg-white/5"
                >
                  <h3 className="text-2xl font-bold">{cab.name}</h3>
                  <p className="text-green-400 mt-2">{cab.price}</p>
                  <p className="text-white/60 mt-2">{cab.desc}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-5 bg-green-400 text-black py-4 rounded-2xl font-bold">
              Confirm Booking
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
            className="rounded-3xl"
          />
        </div>
      </section>
    </main>
  );
}
