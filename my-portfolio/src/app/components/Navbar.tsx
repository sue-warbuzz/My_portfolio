'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: 'https://www.linkedin.com/in/sudipti-sharma-8343b618b', label: 'LinkedIn'},
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0f172a] border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          S.Sharma
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-cyan-400 transition ${
                  pathname === item.href ? 'text-cyan-400 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 ${
                    pathname === item.href ? 'text-cyan-400 font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
