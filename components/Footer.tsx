import Link from 'next/link'
import { Github, Twitter, Mail, Code2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Presupuesto<span className="text-blue-500">20</span></span>
            </Link>
            <p className="text-gray-400 text-sm">
              Software de presupuestos de código abierto. Moderno, potente y gratuito.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Descargar
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="https://github.com/presupuesto20" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Comunidad
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:mfalconsoft@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/presupuesto20" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/presupuesto20" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center space-x-2">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Presupuesto20. Todos los derechos reservados. Open Source bajo licencia MIT.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacidad
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
