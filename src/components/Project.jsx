import { useState } from 'react';
import { Plus, Phone, MapPin } from 'lucide-react';

function AlertCard({ alert }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <img src={alert.photo} alt={alert.name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{alert.name} · {alert.age}</h3>
          <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Missing</span>
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
  const [draft, setDraft] = useState({
    name: '',
    age: '',
    lastSeen: '',
    date: new Date().toISOString().slice(0, 10),
    photo: '',
    description: '',
    contact: '',
  });

  const submit = (e) => {
    e.preventDefault();
    if (!draft.name || !draft.age || !draft.lastSeen || !draft.photo || !draft.contact) return;
    onCreateAlert({ ...draft, age: Number(draft.age) });
    setDraft({ name: '', age: '', lastSeen: '', date: new Date().toISOString().slice(0, 10), photo: '', description: '', contact: '' });
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Active Alerts</h1>
      </div>

      <section className="grid lg:grid-cols-3 gap-6">
        <form onSubmit={submit} className="bg-white border rounded-xl p-4 space-y-3 lg:sticky lg:top-24 h-fit">
          <h2 className="font-semibold flex items-center gap-2"><Plus size={18} /> Create Alert</h2>
          <input className="w-full border rounded-md px-3 py-2" placeholder="Child's name" value={draft.name} onChange={(e)=>setDraft({...draft, name:e.target.value})} />
          <input className="w-full border rounded-md px-3 py-2" type="number" placeholder="Age" value={draft.age} onChange={(e)=>setDraft({...draft, age:e.target.value})} />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Last seen location" value={draft.lastSeen} onChange={(e)=>setDraft({...draft, lastSeen:e.target.value})} />
          <input className="w-full border rounded-md px-3 py-2" type="date" value={draft.date} onChange={(e)=>setDraft({...draft, date:e.target.value})} />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Photo URL" value={draft.photo} onChange={(e)=>setDraft({...draft, photo:e.target.value})} />
          <textarea className="w-full border rounded-md px-3 py-2" rows={3} placeholder="Description" value={draft.description} onChange={(e)=>setDraft({...draft, description:e.target.value})} />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Contact number" value={draft.contact} onChange={(e)=>setDraft({...draft, contact:e.target.value})} />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">Submit Alert</button>
          <p className="text-xs text-slate-500">Please verify details before posting. False reports may be penalized.</p>
        </form>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {alerts.length === 0 && (
            <p className="text-slate-600">No alerts yet. Create one using the form.</p>
          )}
          {alerts.map((a) => (
            <AlertCard key={a.id} alert={a} />
          ))}
        </div>
      </section>
    </main>
  );
}
