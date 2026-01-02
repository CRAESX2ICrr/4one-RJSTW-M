"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ loading: false, ok: false, msg: "Please fill name, email and message." });
      return false;
    }
    // simple email check
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setStatus({ loading: false, ok: false, msg: "Please enter a valid email." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });
    if (!validate()) return;
    try {
      // Replace endpoint with your real API route if available
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus({ loading: false, ok: true, msg: "Message sent — we'll be in touch shortly." });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({ loading: false, ok: false, msg: data?.error || "Failed to send message." });
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: "Network error. Please try again later." });
    }
  };

  return (
    <section className="w-full mt-6 mb-40">
      <div
        className="relative mx-auto w-[90%] max-w-6xl overflow-hidden rounded-3xl bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/images/contact.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-8 py-12 text-white">
          <div className="mx-auto max-w-5xl">
            <span className="mb-3 inline-block rounded-full border border-teal-300 bg-teal-100/10 px-4 py-1 text-xs font-semibold tracking-widest text-teal-300">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Visit Our Studio or Send a Message
            </h2>

            <p className="mt-3 text-white/80">
              We're available for consultations, collaborations, and custom projects. Use the form
              or contact details below and we'll respond within one business day.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {/* LEFT: Contact Info + Form */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-white/5 p-6">
                  <h3 className="mb-3 text-xl font-semibold">Contact Details</h3>
                  <p className="text-sm text-white/80">4One Creative Studio</p>
                  <p className="text-sm text-white/80">123 Main St, Suite 400</p>
                  <p className="text-sm text-white/80">Anytown, CA 94043</p>

                  <div className="mt-4 flex flex-col gap-2 text-sm">
                    <div>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+14085551234" className="text-teal-200 hover:underline">+1 (408) 555-1234</a>
                    </div>
                    <div>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:hello@4one.studio" className="text-teal-200 hover:underline">hello@4one.studio</a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Opening Hours</h4>
                    <ul className="mt-2 text-sm text-white/80">
                      <li>Mon–Fri: 9:00 AM — 6:00 PM</li>
                      <li>Sat: 10:00 AM — 4:00 PM</li>
                      <li>Sun: Closed</li>
                    </ul>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white/6 p-6">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <label className="flex flex-col text-sm">
                      <span className="mb-1 text-white/90">Name</span>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="Your full name"
                      />
                    </label>

                    <label className="flex flex-col text-sm">
                      <span className="mb-1 text-white/90">Email</span>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col text-sm">
                    <span className="mb-1 text-white/90">Subject</span>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                      placeholder="Project or inquiry title (optional)"
                    />
                  </label>

                  <label className="flex flex-col text-sm">
                    <span className="mb-1 text-white/90">Message</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
                      placeholder="Tell us about your project..."
                    />
                  </label>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-teal-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-teal-300 disabled:opacity-60"
                      disabled={status.loading}
                    >
                      {status.loading ? "Sending..." : "Send Message"}
                    </button>

                    {status.ok === true && (
                      <div className="text-sm text-teal-200">{status.msg}</div>
                    )}
                    {status.ok === false && (
                      <div className="text-sm text-rose-300">{status.msg}</div>
                    )}
                  </div>
                </form>
              </div>

              {/* RIGHT: Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps?q=1600+Amphitheatre+Parkway+Mountain+View+CA&output=embed"
                  className="h-full min-h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-black/40 p-4 text-sm text-white/90">
                  <div className="mb-1 font-semibold">Visit Us</div>
                  <div>123 Main St, Suite 400, Anytown, CA</div>
                  <div className="mt-2">By appointment or drop in during opening hours.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}