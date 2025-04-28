'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<null | 'success' | 'error'>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 text-center">
          Contact Me
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Want to work together or just say hi? Fill out the form below!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-800 text-white p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
          {status === 'success' && (
            <p className="text-green-400 mt-2">✅ Message sent!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 mt-2">❌ Failed to send. Try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
