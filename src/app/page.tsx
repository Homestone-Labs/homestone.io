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
            Homestone Labs builds software for real estate investors, flippers,
            and contractors — tools that bring accountability and structure
            to every project.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-dark-card border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <p className="text-orange font-mono text-sm tracking-wider uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">
            Software that works as hard as you do.
          </h2>
          <p className="mt-6 text-lg text-gray-light max-w-2xl leading-relaxed">
            We&apos;re building the next generation of tools for property
            professionals — from AI-powered walkthroughs to material
            procurement to ongoing maintenance. Real tools for real work.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "AI-Powered",
                desc: "We use AI where it actually matters — to save you hours of tedious documentation and estimation work.",
              },
              {
                title: "Contractor-Ready",
                desc: "Everything we build outputs professional, structured documents your crew and subs can actually use.",
              },
              {
                title: "Accountability First",
                desc: "Our tools don't just estimate — they track, compare, and keep every project honest from start to finish.",
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>&copy; 2026 Homestone Labs LLC</span>
            <span>Built in Ohio 🏠</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
