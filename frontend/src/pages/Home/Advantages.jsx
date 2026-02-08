const advantages = [
  {
    id: "01",
    title: "Wholesale Pricing",
    desc: "Daily market-aligned prices with full transparency.",
    icon: "💰",
  },
  {
    id: "02",
    title: "On-Time Delivery",
    desc: "Predictable logistics you can plan your business around.",
    icon: "⏱️",
  },
  {
    id: "03",
    title: "Bulk Ready",
    desc: "Designed specifically for large and repeat orders.",
    icon: "📦",
  },
  {
    id: "04",
    title: "Quality First",
    desc: "Handled with hygiene, care, and strict quality checks.",
    icon: "✔️",
  },
];

export default function Advantages() {
  return (
    <div className="max-w-6xl mx-auto px-4">

      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Why Businesses Choose EVORA
      </h2>

      {/* Compact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((a) => (
          <div
            key={a.id}
            className="p-5 rounded-xl bg-white border hover:shadow-md transition flex flex-col items-start"
          >
            {/* Icon + Number */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{a.icon}</span>
              <span className="text-sm font-semibold text-evora-gold">
                {a.id}
              </span>
            </div>

            {/* Content */}
            <h3 className="font-semibold text-base text-evora-navy mb-1">
              {a.title}
            </h3>
            <p className="text-sm text-gray-600 leading-snug">
              {a.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}