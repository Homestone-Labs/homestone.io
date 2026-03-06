export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 49px, #F96302 49px, #F96302 50px),
            repeating-linear-gradient(90deg, transparent, transparent 49px, #F96302 49px, #F96302 50px)`,
        }} />
        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <nav className="mb-20 sm:mb-28">
            <span className="text-2xl font-bold tracking-widest text-white">
              HOMESTONE
            </span>
          </nav>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl">
            Every property deserves a permanent record.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-light max-w-2xl leading-relaxed">
            Homestone builds the data infrastructure for real estate investors,
            flippers, and contractors. Starting with FlipWalk.
          </p>
          <a
            href="mailto:chris@homestone.io?subject=Waitlist%20-%20Homestone"
            className="inline-block mt-10 px-8 py-4 bg-orange text-white font-semibold rounded-lg hover:bg-orange-dark transition-colors text-lg"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* FlipWalk */}
      <section className="bg-dark-card border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <p className="text-orange font-mono text-sm tracking-wider uppercase mb-4">
            Product
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            FlipWalk — Walk it. Film it.
            <br />
            Get your SOW.
          </h2>
          <p className="mt-6 text-lg text-gray-light max-w-2xl leading-relaxed">
            Point your phone at a property, walk through it, and FlipWalk
            generates a professional scope of work in minutes — not hours.
            AI-powered, contractor-ready, zero guesswork.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {[
              {
                title: "Voice-guided walkthrough capture",
                desc: "Just talk and walk. FlipWalk guides you room by room.",
              },
              {
                title: "AI-generated scope of work",
                desc: "A full SOW, auto-generated from your walkthrough footage and narration.",
              },
              {
                title: "Contractor-ready PDF export",
                desc: "Hand it to your crew. Clear, professional, ready to bid.",
              },
              {
                title: "Review Mode — accountability, not estimation",
                desc: "Compare actuals to scope. Track what changed and why.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-dark-border rounded-xl p-6 hover:border-orange/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-light text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-dark-border px-5 py-2 text-sm text-gray-light">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            Coming Soon to iOS
          </div>
        </div>
      </section>

      {/* Product Suite */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <p className="text-orange font-mono text-sm tracking-wider uppercase mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Homestone Suite
          </h2>
          <p className="mt-4 text-gray-light max-w-xl">
            A connected toolkit for every stage of a property flip.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "FlipWalk",
                desc: "AI property walkthrough → scope of work",
                status: "Building now",
                active: true,
              },
              {
                name: "FlipShop",
                desc: "SOW → shopping carts at Home Depot, Lowe's, Amazon",
                status: "Coming soon",
                active: false,
              },
              {
                name: "FlipGuard",
                desc: "AI landlord maintenance portal",
                status: "Coming soon",
                active: false,
              },
            ].map((product) => (
              <div
                key={product.name}
                className={`rounded-xl p-6 border ${
                  product.active
                    ? "border-orange/40 bg-orange/5"
                    : "border-dark-border bg-dark-card"
                }`}
              >
                <h3 className="text-white font-bold text-lg">{product.name}</h3>
                <p className="mt-2 text-gray-light text-sm leading-relaxed">
                  {product.desc}
                </p>
                <p
                  className={`mt-4 text-xs font-mono uppercase tracking-wider ${
                    product.active ? "text-orange" : "text-gray-light/60"
                  }`}
                >
                  {product.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>&copy; 2026 Homestone Labs LLC</span>
            <span>Built in Ohio 🏠</span>
          </div>
          <a
            href="mailto:chris@homestone.io"
            className="text-orange hover:text-orange-dark transition-colors"
          >
            chris@homestone.io
          </a>
        </div>
      </footer>
    </main>
  );
}
