"use client";

import { useState } from "react";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const whatsappLink = () => {
    const msg = `🚖 *Yatra24×7 Premium Booking*\n\n📍 Pickup: ${pickup}\n📌 Drop: ${drop}\n\nBooked from website`;

    return `https://wa.me/918002697331?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Navbar */}

      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-3xl font-extrabold tracking-wide text-[#d4a017]">
            Yatra24×7
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-[#d4a017]">Services</a>
            <a href="#fleet" className="hover:text-[#d4a017]">Fleet</a>
            <a href="#reviews" className="hover:text-[#d4a017]">Reviews</a>
            <a href="#contact" className="hover:text-[#d4a017]">Contact</a>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            className="bg-[#d4a017] hover:bg-[#b8860b] text-black px-6 py-3 rounded-full font-bold transition-all"
          >
            Book Ride
          </a>
        </div>
      </nav>

      {/* Hero */}

   <section className="relative min-h-screen flex items-center justify-center px-6">

  <img
    src="https://images.unsplash.com/photo-1511527844068-006b95d162c2?q=80&w=1600&auto=format&fit=crop"
    alt="Luxury Cab"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  <div className="max-w-7xl relative z-10 text-center">
