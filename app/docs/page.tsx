import { BookOpen, Code, Rocket, Settings, FileText, GitBranch } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Documentación
          </h1>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas saber para dominar Presupuesto20
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center space-x-3 mb-4">
              <Rocket className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Inicio Rápido</h2>
            </div>
            <p className="text-blue-100 text-lg mb-6">
              Empieza a usar Presupuesto20 en menos de 5 minutos
            </p>
            <ol className="space-y-3 text-blue-50">
              <li className="flex items-start space-x-3">
                <span className="bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span>Descarga e instala Presupuesto20 para tu sistema operativo</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span>Completa la configuración inicial con tus datos</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span>Crea tu primer presupuesto siguiendo el asistente</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DocSection 
            icon={<BookOpen className="w-10 h-10" />}
            title="Guía de Usuario"
            description="Aprende a usar todas las funcionalidades básicas y avanzadas"
            topics={[
              "Configuración inicial",
              "Crear presupuestos",
              "Gestionar clientes",
              "Exportar e imprimir"
            ]}
          />
          
          <DocSection 
            icon={<Code className="w-10 h-10" />}
            title="API Reference"
            description="Documentación completa de la API REST para integraciones"
            topics={[
              "Autenticación",
              "Endpoints disponibles",
              "Ejemplos de uso",
              "Rate limits"
            ]}
          />
          
          <DocSection 
            icon={<Settings className="w-10 h-10" />}
            title="Configuración"
            description="Personaliza Presupuesto20 según tus necesidades"
            topics={[
              "Preferencias generales",
              "Plantillas personalizadas",
              "Integraciones",
              "Permisos y roles"
            ]}
          />
          
          <DocSection 
            icon={<FileText className="w-10 h-10" />}
            title="Tutoriales"
            description="Guías paso a paso para casos de uso comunes"
            topics={[
              "Primer presupuesto",
              "Workflows avanzados",
              "Reportes personalizados",
              "Automatizaciones"
            ]}
          />
          
          <DocSection 
            icon={<GitBranch className="w-10 h-10" />}
            title="Contribuir"
            description="Aprende cómo contribuir al proyecto open source"
            topics={[
              "Configurar entorno",
              "Estándares de código",
              "Enviar pull requests",
              "Reportar bugs"
            ]}
          />
          
          <DocSection 
            icon={<Rocket className="w-10 h-10" />}
            title="Mejores Prácticas"
            description="Tips y consejos para aprovechar al máximo la herramienta"
            topics={[
              "Organización eficiente",
              "Seguridad de datos",
              "Optimización",
              "Casos de uso"
            ]}
          />
        </div>

        {/* Video Tutorials */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Video Tutoriales</h2>
          <p className="text-gray-400 mb-8">
            Aprende visualmente con nuestros tutoriales en video
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoCard 
              title="Introducción a Presupuesto20"
              duration="8:45"
              description="Una visión general de las principales características"
            />
            <VideoCard 
              title="Crear tu primer presupuesto"
              duration="12:30"
              description="Tutorial paso a paso para principiantes"
            />
            <VideoCard 
              title="Funciones avanzadas"
              duration="15:20"
              description="Explora características avanzadas y trucos"
            />
            <VideoCard 
              title="Integraciones y API"
              duration="10:15"
              description="Conecta Presupuesto20 con otras herramientas"
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
          
          <div className="space-y-6">
            <FAQItem 
              question="¿Es Presupuesto20 realmente gratis?"
              answer="Sí, Presupuesto20 es 100% gratuito y siempre lo será. Es software de código abierto bajo licencia MIT."
            />
            <FAQItem 
              question="¿Puedo usar Presupuesto20 para uso comercial?"
              answer="Absolutamente. Puedes usar Presupuesto20 para cualquier propósito, incluyendo uso comercial, sin restricciones."
            />
            <FAQItem 
              question="¿Dónde se almacenan mis datos?"
              answer="Tus datos se almacenan localmente en tu dispositivo. Opcionalmente, puedes habilitar sincronización en la nube."
            />
            <FAQItem 
              question="¿Cómo obtengo soporte técnico?"
              answer="Puedes obtener soporte a través de GitHub Issues, nuestra comunidad en Discord, o por email."
            />
          </div>
        </section>

        {/* Help CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4 text-lg">¿No encuentras lo que buscas?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/presupuesto20"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Ver en GitHub
            </a>
            <a 
              href="mailto:mfalconsoft@gmail.com"
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Contactar Soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function DocSection({ icon, title, description, topics }: {
  icon: React.ReactNode
  title: string
  description: string
  topics: string[]
}) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-6 hover:border-blue-500/50 transition-all group">
      <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li key={topic} className="text-gray-300 text-sm flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VideoCard({ title, duration, description }: {
  title: string
  duration: string
  description: string
}) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-sm text-gray-400 bg-slate-900 px-2 py-1 rounded">{duration}</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border-b border-slate-800 pb-6 last:border-b-0">
      <h3 className="text-lg font-semibold text-white mb-2">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  )
}
