import { useNavigate } from "react-router-dom";

import Hero from "./Hero";
import Advantages from "./Advantages";
import HowItWorks from "./HowItWorks";
import WhoWeServe from "./WhoWeServe";
import PriceHighlights from "./PriceHighlights";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="w-screen bg-evora-soft text-evora-navy overflow-x-hidden">

      {/* ===== TOP NAVBAR ===== */}
      <header className="flex justify-between items-center px-6 md:px-10 py-3 sticky top-0 bg-evora-soft/90 backdrop-blur z-50">
        <span className="font-bold text-lg tracking-wide text-evora-navy">
          EVORA
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium hover:text-evora-gold transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-full bg-evora-gold text-evora-dark text-sm font-semibold hover:scale-105 transition"
          >
            Register
          </button>
        </div>
      </header>

      {/* ===== WHAT EVORA DOES / HERO ===== */}
      <section className="py-6 md:py-8">
        <Hero />
      </section>

      {/* ===== ADVANTAGES ===== */}
      <section className="py-4 md:py-6 bg-white">
        <Advantages />
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-4md:py-6">
        <HowItWorks />
      </section>

      {/* ===== WHO WE SERVE ===== */}
      <section className="py-4 md:py-6 bg-white">
        <WhoWeServe />
      </section>

      {/* ===== PRICE HIGHLIGHTS ===== */}
      <section className="py-6md:py-8">
        <PriceHighlights />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to simplify bulk grocery sourcing?
        </h2>

        <p className="text-evora-navy/70 max-w-xl mx-auto mb-6 text-sm md:text-base">
          Join EVORA for transparent pricing, reliable delivery, and stress-free
          bulk ordering.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 rounded-full bg-evora-gold text-evora-dark font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

    </main>
  );
}