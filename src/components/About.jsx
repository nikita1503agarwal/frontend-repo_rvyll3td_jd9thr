export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">About the Project</h1>
      <p className="mt-4 text-slate-700">
        This initiative empowers communities and authorities to collaborate quickly when a child goes missing. It focuses on three pillars: fast reporting, verified identification, and wide broadcast of alerts. The platform supports structured case creation, photo and description sharing, and geolocation hints to accelerate recovery.
      </p>

      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold">Identification</h3>
          <p className="text-sm text-slate-600 mt-1">Photo‑based profiles with key features and last‑seen details help the community recognize and report sightings responsibly.</p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold">Alerts</h3>
          <p className="text-sm text-slate-600 mt-1">Time‑sensitive alerts broadcast to nearby users and stakeholders improve the odds of quick assistance.</p>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold">Privacy</h3>
          <p className="text-sm text-slate-600 mt-1">Only essential details are shared publicly. Sensitive information is visible to authorized responders.</p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">How You Can Help</h2>
        <ul className="list-disc pl-6 mt-3 text-slate-700 space-y-2">
          <li>Share confirmed alerts within your local networks.</li>
          <li>Report sightings with clear details and accurate locations.</li>
          <li>Encourage schools and communities to join the network.</li>
        </ul>
      </section>
    </main>
  );
}
