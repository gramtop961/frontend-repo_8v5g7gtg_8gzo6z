import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('There was an issue sending your message. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Lets talk</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">Tell me about your goals. Ill respond within one business day.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input name="name" placeholder="Your name" required className="bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/60" />
            <input name="email" type="email" placeholder="Email" required className="bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/60" />
            <input name="company" placeholder="Company (optional)" className="bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/60" />
            <textarea name="message" placeholder="What would you like to build?" rows="5" required className="bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-blue-200/60" />
            <button type="submit" className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 transition">Send message</button>
          </form>
          {status && <p className="mt-4 text-blue-200/90 text-sm">{status}</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact
