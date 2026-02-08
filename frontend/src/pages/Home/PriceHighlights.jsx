const prices = [
  { item: "Tomato", market: "₹40", evora: "₹32", save: "₹8" },
  { item: "Onion", market: "₹38", evora: "₹30", save: "₹8" },
  { item: "Potato", market: "₹28", evora: "₹22", save: "₹6" },
  { item: "Rice (Bulk)", market: "₹58", evora: "₹52", save: "₹6" },
];

export default function PriceHighlights() {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Today’s Price Highlights
      </h2>

      <p className="text-center text-sm text-gray-600 mb-6">
        Daily wholesale prices compared with EVORA bulk rates
      </p>

      <div className="border rounded-xl overflow-hidden bg-white">
        <div className="grid grid-cols-4 bg-gray-100 text-sm font-semibold">
          <div className="p-3">Item</div>
          <div className="p-3 text-center">Market</div>
          <div className="p-3 text-center">EVORA</div>
          <div className="p-3 text-center">Save</div>
        </div>

        {prices.map((p, i) => (
          <div
            key={i}
            className="grid grid-cols-4 border-t text-sm hover:bg-gray-50 transition"
          >
            <div className="p-3 font-medium">{p.item}</div>
            <div className="p-3 text-center text-gray-500 line-through">
              {p.market}
            </div>
            <div className="p-3 text-center text-green-600 font-semibold">
              {p.evora}
            </div>
            <div className="p-3 text-center text-evora-gold font-semibold">
              {p.save}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center mt-3">
        * Prices updated daily based on wholesale market data
      </p>
    </div>
  );
}