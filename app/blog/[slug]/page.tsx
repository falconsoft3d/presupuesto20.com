import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const htmlContent = marked(post.content)

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al blog</span>
        </Link>

        {/* Article Header */}
        <article className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-8 md:p-12">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-gray-400 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-4xl prose-h1:mb-4
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-ul:my-4
              prose-ol:text-gray-300 prose-ol:my-4
              prose-li:my-2
              prose-code:text-blue-400 prose-code:bg-slate-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
            "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">¿Te gustó este artículo?</p>
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
          >
            <span>Ver más artículos</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
