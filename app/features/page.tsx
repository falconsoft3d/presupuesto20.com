import { Code, Zap, Shield, Users, FileText, TrendingUp, Database, Cloud, Lock, Workflow } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Características Poderosas
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre todas las funcionalidades que hacen de Presupuesto20 la mejor opción para gestionar tus presupuestos
          </p>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Funcionalidades Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-12 h-12" />}
              title="Rendimiento Excepcional"
              description="Optimizado para máxima velocidad. Carga instantánea y respuesta inmediata sin importar el volumen de datos."
              color="blue"
            />
            <FeatureCard 
              icon={<Shield className="w-12 h-12" />}
              title="Seguridad Avanzada"
              description="Encriptación de datos, autenticación robusta y control de permisos granular para proteger tu información."
              color="green"
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12" />}
              title="Colaboración en Equipo"
              description="Trabaja simultáneamente con tu equipo. Sincronización en tiempo real y control de versiones integrado."
              color="purple"
            />
            <FeatureCard 
              icon={<FileText className="w-12 h-12" />}
              title="Informes Profesionales"
              description="Genera reportes detallados con gráficos interactivos. Exporta a PDF, Excel o comparte online."
              color="blue"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12" />}
              title="Analytics Inteligente"
              description="Visualiza tendencias, identifica patrones y toma decisiones basadas en datos con nuestro motor de análisis."
              color="cyan"
            />
            <FeatureCard 
              icon={<Code className="w-12 h-12" />}
              title="API RESTful"
              description="Integra con tus sistemas existentes mediante nuestra API completa y bien documentada."
              color="orange"
            />
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-20 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Características Avanzadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdvancedFeature 
              icon={<Database className="w-8 h-8" />}
              title="Base de Datos Potente"
              description="Maneja miles de presupuestos sin perder velocidad. Búsqueda instantánea y filtros avanzados."
              features={[
                "Búsqueda full-text",
                "Filtros personalizables",
                "Ordenamiento múltiple",
                "Exportación masiva"
              ]}
            />
            <AdvancedFeature 
              icon={<Cloud className="w-8 h-8" />}
              title="Sincronización Cloud"
              description="Accede a tus datos desde cualquier dispositivo. Sincronización automática y backups en la nube."
              features={[
                "Sync automático",
                "Backup diario",
                "Acceso multi-dispositivo",
                "Modo offline"
              ]}
            />
            <AdvancedFeature 
              icon={<Lock className="w-8 h-8" />}
              title="Control de Acceso"
              description="Define quién puede ver y editar cada presupuesto. Roles y permisos personalizables."
              features={[
                "Roles personalizados",
                "Permisos granulares",
                "Auditoría de cambios",
                "Sesiones seguras"
              ]}
            />
            <AdvancedFeature 
              icon={<Workflow className="w-8 h-8" />}
              title="Automatización"
              description="Automatiza tareas repetitivas con workflows personalizables y reglas de negocio."
              features={[
                "Workflows personalizables",
                "Notificaciones automáticas",
                "Aprobaciones multi-nivel",
                "Integración con calendarios"
              ]}
            />
          </div>
        </section>

        {/* Integration Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Integraciones</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Conecta Presupuesto20 con tus herramientas favoritas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Google Drive', 'Dropbox', 'Slack', 'Teams', 'Zapier', 'Webhooks'].map((integration) => (
              <div key={integration} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <p className="text-white font-semibold">{integration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para probarlo?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Descarga Presupuesto20 gratis y descubre todas sus características
          </p>
          <a 
            href="/download"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Descargar Ahora
          </a>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  const colorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    purple: 'text-purple-500',
    cyan: 'text-cyan-500',
    orange: 'text-orange-500',
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all group">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function AdvancedFeature({ icon, title, description, features }: { icon: React.ReactNode, title: string, description: string, features: string[] }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <div className="text-blue-500 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="text-gray-300 text-sm flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
