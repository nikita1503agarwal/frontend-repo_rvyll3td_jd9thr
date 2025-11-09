import { useState } from 'react';
import { ShieldAlert, Send, User } from 'lucide-react';

export default function Home({ onNavigate, showLogin = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return setMessage('Enter email and password');
    setMessage('Logged in successfully (demo)');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Missing Children Identification & Alert System
        </h1>
        <p className="text-slate-600">
          A community-driven platform to rapidly report, verify, and broadcast alerts when a child goes missing.
          Share sightings, receive area‑based notifications, and collaborate with authorities to bring children home safely.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => onNavigate('project')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            <ShieldAlert size={18} /> View Active Alerts
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-4 py-2 rounded-md"
          >
            Learn More
          </button>
        </div>

        <div className="mt-8 p-4 rounded-lg bg-white border">
          <p className="text-sm text-slate-700">
            Tip: Use the Alerts page to create a new alert with details and a photo link.
          </p>
        </div>
      </section>

      <section className="bg-white border rounded-xl p-6 h-fit">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-blue-600" size={20} />
          <h2 className="font-semibold">{showLogin ? 'Login' : 'Quick Sign In'}</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            <Send size={16} /> Continue
          </button>
          {message && (
            <p className="text-green-600 text-sm text-center">{message}</p>
          )}
        </form>
      </section>
    </main>
  );
}
