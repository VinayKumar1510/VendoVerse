'use client';

import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-400 drop-shadow">
          💬 Need Help? We&apos;re Here!
        </h1>
        <p className="text-lg text-slate-300 mb-10">
          Whether it&apos;s a question, bug report, or suggestion — our team is ready to help you out.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-xl border border-white/10 shadow-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-semibold text-slate-200">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-white/10 rounded-md bg-white/5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-slate-200">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-slate-200">Subject</label>
            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-slate-200">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md border border-white/10 bg-white/5 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-[1.02] hover:shadow-lg transition duration-300"
          >
            📩 Send Message
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-center text-sm text-slate-400">
        <p>Or email us directly at <a href="mailto:support@vendorverse.com" className="text-indigo-400 hover:underline">vinaysharaya1@gmail.com</a></p>
        <Link href="/" className="block mt-4 text-indigo-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
