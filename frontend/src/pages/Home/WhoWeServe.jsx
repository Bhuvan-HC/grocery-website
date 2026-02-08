const clients = [
  {
    title: "Hotels",
    desc: "Daily bulk procurement with fixed delivery schedules",
  },
  {
    title: "Caterers",
    desc: "Large quantity sourcing with consistent quality",
  },
  {
    title: "Event Organizers",
    desc: "Reliable supply for weddings & large events",
  },
  {
    title: "Institutions",
    desc: "Cost-effective long-term grocery contracts",
  },
];

export default function WhoWeServe() {
  return (
    <div className="max-w-5xl mx-auto text-center">

      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Who We Serve
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {clients.map((c, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-white border hover:shadow-md transition"
          >
            <h3 className="font-semibold text-base mb-1 text-evora-navy">
              {c.title}
            </h3>
            <p className="text-sm text-gray-600">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}