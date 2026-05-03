export default function Home() {
  const faqs = [
    {
      q: "Which review platforms are supported?",
      a: "ReviewReply AI works with Google Business reviews and Yelp reviews. Simply paste any review and get a tailored response instantly."
    },
    {
      q: "How does the AI match my restaurant's voice?",
      a: "During onboarding you describe your brand personality — casual, upscale, family-friendly, etc. The AI uses that profile on every response so replies always sound like you."
    },
    {
      q: "Can I edit the generated responses before posting?",
      a: "Absolutely. Every response is fully editable. The AI gives you a strong starting point; you have final say before anything goes live."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] text-[#58a6ff] border border-[#30363d]">
          AI-Powered · Google &amp; Yelp · $9/mo
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Reply to Every Review<br />
          <span className="text-[#58a6ff]">in Your Restaurant's Voice</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a Google or Yelp review, and ReviewReply AI crafts a personalized, sentiment-appropriate response that sounds exactly like you — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          {[
            ["500+", "Restaurants"],
            ["50k+", "Reviews Answered"],
            ["4.9★", "Avg Rating"]
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8">
          <div className="text-4xl font-extrabold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#58a6ff] font-semibold mb-6">Pro Plan</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited AI-generated responses",
              "Google &amp; Yelp review support",
              "Custom brand voice profile",
              "Sentiment-aware tone (1–5 stars)",
              "One-click copy to clipboard",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#c9d1d9]">
                <span className="mt-0.5 text-[#3fb950] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        © {new Date().getFullYear()} ReviewReply AI. All rights reserved.
      </footer>
    </main>
  );
}
