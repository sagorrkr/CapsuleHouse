import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, Block } from '@/data/blogPosts';
import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Flower Capsule Blog`,
    description: post.excerpt,
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-heading text-2xl lg:text-3xl font-bold text-[#0d1b2a] mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'p':
      return (
        <p key={i} className="text-slate-600 leading-relaxed mb-5 text-lg">
          {block.text}
        </p>
      );
    case 'ul':
      return (
        <ul key={i} className="space-y-3 my-6 pl-4">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-3 text-slate-600">
              <span className="text-emerald-500 font-bold mt-1 flex-shrink-0">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 bg-[#0d1b2a]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-slate-400 text-sm mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {post.category}
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="relative h-72 lg:h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/40 to-transparent" />
      </div>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xl text-slate-500 leading-relaxed mb-10 font-medium border-l-4 border-emerald-400 pl-5">
            {post.excerpt}
          </p>

          <div>
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/#blog"
              className="text-slate-500 hover:text-[#0d1b2a] text-sm font-medium flex items-center gap-2 transition-colors"
            >
              ← Back to Blog
            </Link>
            <Link
              href="/#contact"
              className="btn btn-sm bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-full px-6 font-semibold transition-all"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
