export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border rounded-2xl p-8">
        <h1 className="text-3xl font-bold">About the Initiative</h1>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Our platform accelerates the first 24 hours after a child goes missing — the most critical window. We combine
          community reach with responsible verification to broadcast precise, actionable alerts. The goal is simple: bring
          children home safely, faster.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold">Identification</h3>
            <p className="text-sm text-slate-600 mt-1">Photo profiles, distinguishing features, and last‑seen details help responsible recognition.</p>
          </div>
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold">Rapid Alerts</h3>
            <p className="text-sm text-slate-600 mt-1">Instant broadcasts reach subscribers and local responders with essential information.</p>
          </div>
          <div className="bg-white border rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold">Privacy</h3>
            <p className="text-sm text-slate-600 mt-1">Only necessary details are public. Sensitive data remains restricted to authorized teams.</p>
          </div>
        </div>
      </div>

      <section className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How it works</h2>
          <ol className="list-decimal pl-5 mt-3 text-slate-700 space-y-2">
            <li>Create a structured alert with details and a photo.</li>
            <li>Share verified updates and sightings with location hints.</li>
            <li>Authorities receive a consolidated case log to act fast.</li>
          </ol>
        </div>
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Community guidelines</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-2">
            <li>Post only verified information and recent photos.</li>
            <li>Respect family privacy; avoid speculation.</li>
            <li>Report suspicious activity via official channels.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
