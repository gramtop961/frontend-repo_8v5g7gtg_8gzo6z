import { Menu, Sparkles, MessageSquare, Briefcase, User } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home', icon: Sparkles },
    { href: '#services', label: 'Services', icon: Briefcase },
    { href: '#work', label: 'Work', icon: MessageSquare },
    { href: '#about', label: 'About', icon: User },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
            <span className="font-semibold text-white">AI Consultant</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5 transition">
                {item.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-xl p-2 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-blue-100/90 hover:text-white hover:bg-white/5 transition">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
