import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export default function GigForm() {
  const [status, setStatus] = useState('idle');
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    const request = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!supabase) { setStatus('sent'); event.currentTarget.reset(); return; }
    const { error } = await supabase.from('gig_requests').insert(request);
    if (error) { setStatus('error'); return; }
    setStatus('sent'); event.currentTarget.reset();
  }
  return <form id="gig-form" onSubmit={handleSubmit}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" required placeholder="you@company.com" /></label><label>WhatsApp number<input name="phone" type="tel" placeholder="+234" /></label><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Website</option><option>Mobile App</option><option>School Portal</option><option>Bulk SMS</option><option>Other</option></select></label><label className="full-field">Project details<textarea name="details" rows="4" placeholder="Tell us about your goals, features, and timeline" /></label><div className="form-row"><label>Estimated budget<select name="budget" required defaultValue=""><option value="" disabled>Select a budget</option><option>₦50,000 - ₦200,000</option><option>₦200,000 - ₦500,000</option><option>₦500,000+</option></select></label><label>Preferred timeline<select name="timeline" required defaultValue=""><option value="" disabled>Select a timeline</option><option>ASAP</option><option>2-4 Weeks</option><option>1-2 Months</option></select></label></div><button className="button button-dark" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending...' : status === 'sent' ? 'Request sent' : 'Send project request'} <span>↗</span></button><p className="form-note">We’ll review your request and contact you via WhatsApp or email.</p>{status === 'sent' && <p className="form-success">Request received. We’ll be in touch within 24 hours.</p>}{status === 'error' && <p className="form-error">Something went wrong. Please email us directly.</p>}</form>;
}
