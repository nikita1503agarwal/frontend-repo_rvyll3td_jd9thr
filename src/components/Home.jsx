import { useState } from 'react';
import { ShieldAlert, Send, User, CheckCircle, Users } from 'lucide-react';

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 bg-white border rounded-xl p-4 shadow-sm">
      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function Home({ onNavigate, showLogin = false, stats = { active: 0, recovered: 0, responders: 0 } }) {
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
    <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">Protect • Respond • Recover</div>
        <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight">
          Rapid alerts to help bring missing children home
        </h1>
        <p className="text-slate-600 text-lg">
          Report cases in minutes, broadcast to nearby responders, and share verified sightings. Every second counts — let’s act together.
        </p>

        <div className="grid grid-cols-3 gap-3 pt-2">
          <Stat label="Active Alerts" value={stats.active} icon={ShieldAlert} />
          <Stat label="Children Recovered" value={stats.recovered} icon={CheckCircle} />
          <Stat label="Community Responders" value={stats.responders} icon={Users} />
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <button
            onClick={() => onNavigate('project')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-sm"
          >
            <ShieldAlert size={18} /> View Active Alerts
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 py-3 rounded-xl shadow-sm"
          >
            Learn More
          </button>
        </div>
      </section>

      <section className="bg-white border rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <User className="text-blue-600" size={20} />
          <h2 className="font-semibold">{showLogin ? 'Login' : 'Quick Sign In'}</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="mt-1 w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
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
