import Image from 'next/image'
import Link from 'next/link'
import { Download, Github, Star, Zap, Shield, Users, Code, FileText, TrendingUp, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/20">
                  🚀 Open Source & Gratuito
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Gestión de Presupuestos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Moderna y Potente</span>
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Presupuesto20 es el software de código abierto que revoluciona la forma en que gestionas tus presupuestos. 
                Rápido, seguro y completamente gratuito.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/download"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Gratis</span>
                </Link>
                
                <Link 
                  href="https://github.com/falconsoft3d/presupuesto20"
                  target="_blank"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all border border-slate-700"
                >
                  <Github className="w-5 h-5" />
                  <span>Ver en GitHub</span>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>100% Gratis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  <span>Open Source</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-800">
                <Image
                  src="/presupuesto20.png"
                  alt="Presupuesto20 Screenshot"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-400">
              Todo lo que necesitas para gestionar presupuestos de forma profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-12 h-12" />}
              title="Rápido y Eficiente"
              description="Optimizado para máximo rendimiento. Carga instantánea y respuesta inmediata."
            />
            <FeatureCard 
              icon={<Shield className="w-12 h-12" />}
              title="Seguro y Confiable"
              description="Tus datos están protegidos con las mejores prácticas de seguridad."
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12" />}
              title="Colaborativo"
              description="Trabaja en equipo con funciones de colaboración en tiempo real."
            />
            <FeatureCard 
              icon={<Code className="w-12 h-12" />}
              title="Open Source"
              description="Código abierto y transparente. Contribuye y personaliza a tu medida."
            />
            <FeatureCard 
              icon={<FileText className="w-12 h-12" />}
              title="Reportes Detallados"
              description="Genera informes profesionales y exporta en múltiples formatos."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12" />}
              title="Analytics Avanzado"
              description="Visualiza tendencias y toma decisiones basadas en datos."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                ¿Por qué elegir Presupuesto20?
              </h2>
              <p className="text-lg text-gray-400">
                Diseñado para profesionales que buscan eficiencia y control total sobre sus presupuestos.
              </p>
              
              <div className="space-y-4">
                <BenefitItem text="Instalación simple en minutos" />
                <BenefitItem text="Interfaz intuitiva y moderna" />
                <BenefitItem text="Sin costos ocultos ni suscripciones" />
                <BenefitItem text="Actualizaciones constantes" />
                <BenefitItem text="Comunidad activa y soporte" />
                <BenefitItem text="Compatible con Windows, Mac y Linux" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Casos de Uso</h3>
              <div className="space-y-4">
                <UseCaseItem 
                  title="Freelancers"
                  description="Gestiona cotizaciones y presupuestos de proyectos"
                />
                <UseCaseItem 
                  title="Pequeñas Empresas"
                  description="Control total de presupuestos y facturación"
                />
                <UseCaseItem 
                  title="Agencias"
                  description="Coordina múltiples proyectos y clientes"
                />
                <UseCaseItem 
                  title="Consultores"
                  description="Presenta propuestas profesionales"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Empieza Hoy Mismo
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a miles de usuarios que ya están transformando su gestión de presupuestos
          </p>
          <Link 
            href="https://github.com/falconsoft3d/presupuesto20"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Descargar Presupuesto20</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </div>
  )
}

function UseCaseItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="bg-slate-900/50 p-4 rounded-lg">
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
