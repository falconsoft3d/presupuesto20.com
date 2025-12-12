import { Download, Github, Apple, Terminal } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Descarga Presupuesto20
          </h1>
          <p className="text-xl text-gray-400">
            Disponible para Windows, macOS y Linux. 100% gratuito.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <DownloadCard 
            icon={<span className="text-6xl">🪟</span>}
            title="Windows"
            version="v1.0.0"
            size="85 MB"
            description="Windows 10 o superior"
            downloadUrl="#"
          />
          <DownloadCard 
            icon={<Apple className="w-16 h-16" />}
            title="macOS"
            version="v1.0.0"
            size="92 MB"
            description="macOS 11 o superior"
            downloadUrl="#"
          />
          <DownloadCard 
            icon={<span className="text-6xl">🐧</span>}
            title="Linux"
            version="v1.0.0"
            size="88 MB"
            description="Ubuntu, Debian, Fedora"
            downloadUrl="#"
          />
        </div>

        {/* Installation Guide */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Instalación Rápida</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                <span>Descarga el instalador</span>
              </h3>
              <p className="text-gray-400 ml-10">
                Selecciona el instalador correspondiente a tu sistema operativo desde las opciones arriba.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                <span>Ejecuta el instalador</span>
              </h3>
              <p className="text-gray-400 ml-10">
                Haz doble clic en el archivo descargado y sigue las instrucciones del asistente de instalación.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center space-x-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                <span>¡Listo para usar!</span>
              </h3>
              <p className="text-gray-400 ml-10">
                Abre Presupuesto20 y comienza a crear tus primeros presupuestos profesionales.
              </p>
            </div>
          </div>
        </section>

        {/* Alternative Installation */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Instalación desde el Código Fuente</h2>
          <p className="text-gray-400 mb-6">
            Para desarrolladores que prefieren compilar desde el código fuente:
          </p>
          
          <div className="bg-slate-950 rounded-lg p-6 border border-slate-800">
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="w-5 h-5 text-green-500" />
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>
            <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`# Clonar el repositorio
git clone https://github.com/presupuesto20/presupuesto20.git

# Entrar al directorio
cd presupuesto20

# Instalar dependencias
npm install

# Compilar
npm run build

# Ejecutar
npm start`}
            </pre>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <a 
              href="https://github.com/presupuesto20"
              target="_blank"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              <Github className="w-5 h-5" />
              <span>Ver en GitHub</span>
            </a>
          </div>
        </section>

        {/* System Requirements */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Requisitos del Sistema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Mínimos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• CPU: Dual Core 2 GHz</li>
                <li>• RAM: 4 GB</li>
                <li>• Disco: 500 MB disponible</li>
                <li>• Pantalla: 1280x720</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Recomendados</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• CPU: Quad Core 3 GHz</li>
                <li>• RAM: 8 GB</li>
                <li>• Disco: 1 GB disponible</li>
                <li>• Pantalla: 1920x1080</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Óptimos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• CPU: 8+ Cores</li>
                <li>• RAM: 16 GB+</li>
                <li>• Disco: SSD</li>
                <li>• Pantalla: 4K</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">¿Necesitas ayuda con la instalación?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/docs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Ver Documentación
            </a>
            <a 
              href="/support"
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Obtener Soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function DownloadCard({ icon, title, version, size, description, downloadUrl }: {
  icon: React.ReactNode
  title: string
  version: string
  size: string
  description: string
  downloadUrl: string
}) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-8 text-center hover:border-blue-500/50 transition-all group">
      <div className="text-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="text-sm text-gray-400 mb-4">
        <p>{version} • {size}</p>
        <p>{description}</p>
      </div>
      <a 
        href={downloadUrl}
        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold w-full justify-center"
      >
        <Download className="w-5 h-5" />
        <span>Descargar</span>
      </a>
    </div>
  )
}
