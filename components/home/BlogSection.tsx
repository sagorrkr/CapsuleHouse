import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
            Blog
          </span>
          <h2 className="font-heading text-5xl lg:text-6xl font-extrabold text-[#0d1b2a] mb-4">
            From the Founders
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Honest writing about why we build this way, what problem we&apos;re
            solving, and where modular living is headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="reveal bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-100 transition-all group"
            >
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-emerald-600 text-xs font-semibold mb-3 tracking-wide">
                  {post.category}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0d1b2a] mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-600 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all"
                >
                  Read more <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
