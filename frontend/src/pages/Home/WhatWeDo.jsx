export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            What EVORA Does
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            EVORA is a bulk grocery procurement platform built specifically for
            hotels, caterers, and event organizers who need reliability, scale,
            and transparent pricing.
          </p>

          <p className="mt-4 text-gray-600">
            We bridge the gap between daily market prices and organized delivery,
            ensuring you always know what you pay — and receive on time.
          </p>
        </div>

        {/* Visual placeholder */}
        <div className="h-80 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-inner"></div>

      </div>
    </section>
  );
}