export default function TrustStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="opacity-90">Businesses Served</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">20+</h3>
          <p className="opacity-90">Product Categories</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">Daily</h3>
          <p className="opacity-90">Price Updates</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">99%</h3>
          <p className="opacity-90">On-Time Delivery</p>
        </div>

      </div>
    </section>
  );
}