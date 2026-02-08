import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();

  return (
    <section className="intro-screen">
      {/* Background Image */}
      <div className="intro-bg"></div>

      {/* Overlay */}
      <div className="intro-overlay"></div>

      {/* Content */}
      <div className="intro-content">
        <h1 className="intro-logo">EVORA</h1>

        <p className="intro-tagline">
          Where comforts find convenience
        </p>

        <p className="intro-subtext">
          Reliable bulk grocery delivery for hotels, caterers & event organizers
        </p>

        <div className="intro-actions">
          <button
            className="intro-btn primary"
            onClick={() => navigate("/landing")}
          >
            Explore EVORA
          </button>

          <button
            className="intro-btn secondary"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </button>
        </div>
      </div>
    </section>
  );
}