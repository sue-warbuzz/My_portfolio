'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      
      {/* Profile Picture */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 md:w-40 md:h-40 mb-6"
      >
        <Image
          src="/IMG_4579.PNG"
          alt="Profile picture"
          layout="fill"
          className="rounded-full object-cover border-4 border-cyan-500 shadow-md"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        Hi, I'm Sudipti Sharma
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-400 max-w-xl mb-6"
      >
        Full-Stack Developer • React | Node | Next.js <br />
        Turning ideas into code that matters 🚀
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <Link
          href="/projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-indigo-500 transition"
        >
          View Projects
        </Link>
        <a
          href="/Sharma_Sudipti.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-indigo-500 text-indigo-400 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-900 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  )
}
