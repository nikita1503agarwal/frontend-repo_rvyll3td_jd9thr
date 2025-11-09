import { useMemo, useState } from 'react';
import { Plus, Phone, MapPin, Search, Filter, BadgeCheck } from 'lucide-react';

function Badge({ children, tone = 'amber' }) {
  const tones = {
    amber: 'bg-amber-100 text-amber-700',
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`text-xs px-2 py-1 rounded ${tones[tone]}`}>{children}</span>
  );
}

function AlertCard({ alert }) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
      <img src={alert.photo} alt={alert.name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{alert.name} · {alert.age}</h3>
          <Badge tone={alert.status === 'Recovered' ? 'green' : 'amber'}>{alert.status}</Badge>
        </div>
        <p className="text-sm text-slate-600 flex items-center gap-2"><MapPin size={16} /> {alert.lastSeen}</p>
        <p className="text-sm text-slate-600">Date: {alert.date}</p>
        <p className="text-sm text-slate-700">{alert.description}</p>
        <a href={`tel:${alert.contact}`} className="inline-flex items-center gap-2 text-blue-600 hover:underline">
          <Phone size={16} /> {alert.contact}
        </a>
      </div>
    </div>
  );
}

export default function Project({ alerts, onCreateAlert }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('All');
  const [draft, setDraft] = useState({
    name: '',
    age: '',
    lastSeen: '',
    date: new Date().toISOString().slice(0, 10),
    photo: '',
    description: '',
    contact: '',
  });

  const filtered = useMemo(() => {
    return alerts.filter(a => {
      const q = query.trim().toLowerCase();
      const matchQ = !q || [a.name, a.lastSeen, a.description].some(v => String(v).toLowerCase().includes(q));
      const matchS = status === 'All' || a.status === status;
      return matchQ && matchS;
    });
  }, [alerts, query, status]);

  const submit = (e) => {
    e.preventDefault();
    if (!draft.name || !draft.age || !draft.lastSeen || !draft.photo || !draft.contact) return;
    onCreateAlert({ ...draft, age: Number(draft.age) });
    setDraft({ name: '', age: '', lastSeen: '', date: new Date().toISOString().slice(0, 10), photo: '', description: '', contact: '' });
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Active Alerts</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-xl px-3 py-2 bg-white">
            <Search size={16} className="text-slate-500" />
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search alerts" className="ml-2 outline-none text-sm" />
          </div>
          <select value={status} onChange={(e)=>setStatus(e.target.value)} className="border rounded-xl px-3 py-2 bg-white text-sm">
            <option>All</option>
            <option>Active</option>
            <option>Recovered</option>
          </select>
        </div>
      </div>

      <section className="grid lg:grid-cols-3 gap-8">
        <form onSubmit={submit} className="bg-white border rounded-2xl p-5 space-y-3 lg:sticky lg:top-24 h-fit shadow-sm">
          <h2 className="font-semibold flex items-center gap-2"><Plus size={18} /> Create Alert</h2>
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Child's name" value={draft.name} onChange={(e)=>setDraft({...draft, name:e.target.value})} />
          <input className="w-full border rounded-xl px-3 py-2" type="number" placeholder="Age" value={draft.age} onChange={(e)=>setDraft({...draft, age:e.target.value})} />
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Last seen location" value={draft.lastSeen} onChange={(e)=>setDraft({...draft, lastSeen:e.target.value})} />
          <input className="w-full border rounded-xl px-3 py-2" type="date" value={draft.date} onChange={(e)=>setDraft({...draft, date:e.target.value})} />
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Photo URL" value={draft.photo} onChange={(e)=>setDraft({...draft, photo:e.target.value})} />
          <textarea className="w-full border rounded-xl px-3 py-2" rows={3} placeholder="Description" value={draft.description} onChange={(e)=>setDraft({...draft, description:e.target.value})} />
          <input className="w-full border rounded-xl px-3 py-2" placeholder="Contact number" value={draft.contact} onChange={(e)=>setDraft({...draft, contact:e.target.value})} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2">Submit Alert</button>
          <p className="text-xs text-slate-500">Verify details before posting. False reports may be penalized.</p>
        </form>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {filtered.length === 0 && (
            <div className="bg-white border rounded-xl p-6 text-center text-slate-600">No matching alerts.</div>
          )}
          {filtered.map((a) => (
            <AlertCard key={a.id} alert={a} />
          ))}
        </div>
      </section>

      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border rounded-2xl p-5 flex items-center gap-3">
        <BadgeCheck className="text-green-600" size={20} />
        <p className="text-sm text-slate-700">Only post accurate, recent photos. Provide a reachable contact number.</p>
      </div>
    </main>
  );
}
