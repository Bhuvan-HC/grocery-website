export default function Hero() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Reliable Bulk Grocery Delivery <br />
            <span className="text-orange-500">for Serious Businesses</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            EVORA helps hotels, caterers, and event organizers source groceries
            at wholesale prices with transparent pricing and on-time delivery.
          </p>

          <div className="mt-8 flex gap-5">
            <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:scale-105 transition">
              Start Ordering
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-50 transition">
              Request Quote
            </button>
          </div>
        </div>

        <div className="h-72 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg"></div>
      </div>
    </section>
  );
}