'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const FORMSPREE_ID = 'xyzlzzwb';
  const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading'); setMessage('');
    const form = e.currentTarget;
    const data = new FormData(form);
    if ((data.get('company') as string)?.length) {
      setStatus('success'); setMessage('Thanks!');
      form.reset(); return;
    }
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok) { setStatus('success'); setMessage('You’re on the list!'); form.reset(); }
      else { setStatus('error'); setMessage(json?.errors?.[0]?.message ?? 'Something went wrong.'); }
    } catch {
      setStatus('error'); setMessage('Network error. Please try again.');
    }
  }

  return (
    <div>
      <h2 id="waitlist-modal" className="mb-3 text-xl font-semibold text-navy-900">
      </h2>

      {status === 'success' ? (
        <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4 ring-1 ring-green-200">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-green-800">{message}</p>
            <p className="text-sm text-green-700/80">We’ll email you when early access opens.</p>
          </div>
        </div>
      ) : (
        <form
  onSubmit={onSubmit}
  className="mx-auto flex w-full max-w-sm flex-col gap-3 text-left"
  aria-busy={status === 'loading'}
>
  {/* Honeypot */}
  <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
  <input type="hidden" name="source" value="landing" />
  <input type="hidden" name="_subject" value="New waitlist signup" />

  <label htmlFor="name" className="sr-only">Name</label>
  <input
    id="name"
    name="name"
    type="text"
    placeholder="Your name (optional)"
    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400"
  />

  <label htmlFor="email" className="sr-only">Email</label>
  <input
    id="email"
    name="email"
    type="email"
    required
    placeholder="you@example.com"
    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-navy-400"
  />

  <button
    type="submit"
    disabled={status === 'loading'}
    className="mx-auto mt-1 w-full rounded-lg bg-navy-700 px-4 py-2 font-medium text-white shadow hover:bg-navy-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-400 disabled:opacity-60"
  >
    {status === 'loading' ? 'Joining…' : 'Join'}
  </button>

  <p className="mt-1 text-center text-xs text-gray-500">
    By joining, you agree to receive occasional product updates.
  </p>
</form>

      )}

      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">{message}</p>
      )}
    </div>
  );
}
