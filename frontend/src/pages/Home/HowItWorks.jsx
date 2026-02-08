const steps = [
  {
    step: "01",
    title: "Check Daily Prices",
    desc: "View transparent wholesale prices updated every morning.",
    icon: "📊",
  },
  {
    step: "02",
    title: "Place Bulk Order",
    desc: "Add items in bulk quantities suited for your business.",
    icon: "🛒",
  },
  {
    step: "03",
    title: "Schedule Delivery",
    desc: "Choose delivery slots aligned with your operations.",
    icon: "🚚",
  },
  {
    step: "04",
    title: "Receive & Relax",
    desc: "Get quality-checked groceries delivered on time.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        How It Works
      </h2>

      <div className="space-y-5">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-xl bg-white border hover:shadow-md transition"
          >
            <div className="text-2xl">{s.icon}</div>

            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-evora-gold">
                  {s.step}
                </span>
                <h3 className="font-semibold text-base text-evora-navy">
                  {s.title}
                </h3>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}