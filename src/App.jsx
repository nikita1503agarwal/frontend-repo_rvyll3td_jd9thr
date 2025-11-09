import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';

function App() {
  const [page, setPage] = useState('home');
  const [alerts, setAlerts] = useState([
    {
      id: 'a1',
      name: 'Aarav Sharma',
      age: 9,
      lastSeen: 'Connaught Place, New Delhi',
      date: '2025-10-21',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
      description: 'Last seen wearing a blue T‑shirt and grey shorts. May respond to the name "Avi".',
      contact: '+91 98XXXXXX21',
      status: 'Active',
    },
    {
      id: 'a2',
      name: 'Meera Nair',
      age: 7,
      lastSeen: 'MG Road, Bengaluru',
      date: '2025-11-01',
      photo:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
      description: 'Carrying a pink school bag with stars. Soft‑spoken and shy.',
      contact: '+91 97XXXXXX12',
      status: 'Active',
    },
  ]);

  const navigate = (next) => setPage(next);

  const handleCreateAlert = (alert) => {
    setAlerts((prev) => [{ id: crypto.randomUUID(), status: 'Active', ...alert }, ...prev]);
    setPage('project');
  };

  const stats = useMemo(() => ({
    active: alerts.length,
    recovered: 12,
    responders: 540,
  }), [alerts.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <Navbar current={page} onNavigate={navigate} />

      {page === 'home' && (
        <Home onNavigate={navigate} stats={stats} />
      )}

      {page === 'about' && <About />}

      {page === 'project' && (
        <Project alerts={alerts} onCreateAlert={handleCreateAlert} />
      )}

      {page === 'login' && (
        <Home onNavigate={navigate} showLogin stats={stats} />
      )}

      <footer className="mt-16 border-t bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 grid gap-3 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Missing Children Identification & Alert System</p>
          <p className="opacity-80">Built for safety, awareness, and rapid response.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
