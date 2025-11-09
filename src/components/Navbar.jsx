import { Home, Info, ShieldAlert, LogIn } from 'lucide-react';

export default function Navbar({ current, onNavigate }) {
  const link = (key, label, Icon) => (
    <button
      onClick={() => onNavigate(key)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors text-sm font-medium hover:bg-slate-100/80 ${
        current === key ? 'text-blue-600' : 'text-slate-700'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 grid place-items-center text-white font-bold shadow-sm">MC</div>
          <span className="font-semibold tracking-tight">Missing Children IAS</span>
        </div>
        <nav className="flex items-center gap-1">
          {link('home', 'Home', Home)}
          {link('about', 'About', Info)}
          {link('project', 'Alerts', ShieldAlert)}
          {link('login', 'Login', LogIn)}
        </nav>
      </div>
    </header>
  );
}
