'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Code2 className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-2xl font-bold text-white">Presupuesto<span className="text-blue-500">20</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-blue-400 transition-colors">
              Características
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-blue-400 transition-colors">
              Documentación
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link 
              href="https://github.com/presupuesto20" 
              target="_blank"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="/download" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold"
            >
              Descargar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            <Link href="/features" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Características
            </Link>
            <Link href="/docs" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Documentación
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link 
              href="https://github.com/presupuesto20" 
              target="_blank"
              className="block text-gray-300 hover:text-blue-400 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="/download" 
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold text-center"
            >
              Descargar
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
