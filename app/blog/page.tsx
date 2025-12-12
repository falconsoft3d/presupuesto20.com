import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { Calendar, User, Tag } from 'lucide-react'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Blog de Presupuesto20
          </h1>
          <p className="text-xl text-gray-400">
            Noticias, tutoriales y recursos sobre gestión de presupuestos
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-400">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="pt-4">
                    <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                      Leer más →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No hay publicaciones disponibles aún.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
