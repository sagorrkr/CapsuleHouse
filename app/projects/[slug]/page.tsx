import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import type { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} — Flower Capsule Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const extraImages = (project.images ?? []).slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 bg-[#0d1b2a]">
        <div className="relative h-[55vh] min-h-[380px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-7xl mx-auto px-6 pb-12">
              {/* Breadcrumb */}
              <nav className="text-slate-400 text-sm mb-6 flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/#projects-proven" className="hover:text-white transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-slate-300">{project.title}</span>
              </nav>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-emerald-600/20 text-emerald-400 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-emerald-500/30">
                  {project.location}
                </span>
                <span className="bg-white/10 text-slate-300 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10">
                  {project.date}
                </span>
              </div>

              <h1 className="font-heading text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Details + Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Specs sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0d1b2a] rounded-2xl p-8 text-white sticky top-28">
                <h3 className="font-heading text-lg font-bold tracking-wider uppercase mb-6 text-emerald-400">
                  Project Details
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: project.location },
                    { label: 'Completed', value: project.date },
                    { label: 'Units Deployed', value: String(project.units) },
                    { label: 'Model', value: project.models },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-1 border-b border-white/10 pb-4">
                      <span className="text-slate-400 text-xs uppercase tracking-widest">{label}</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/?model=${encodeURIComponent(project.models)}#contact`}
                  className="btn w-full bg-emerald-600 hover:bg-emerald-500 text-white border-0 rounded-xl py-3 font-semibold text-sm transition-all hover:scale-[1.02] mt-8"
                >
                  Build a Similar Project →
                </Link>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#0d1b2a] mb-6">
                About This Project
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                {project.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-heading font-bold text-[#0d1b2a] mb-3 text-sm uppercase tracking-widest">Challenge</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="font-heading font-bold text-emerald-700 mb-3 text-sm uppercase tracking-widest">Outcome</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* Highlights */}
              <h3 className="font-heading text-xl font-bold text-[#0d1b2a] mb-5">
                Project Highlights
              </h3>
              <ul className="space-y-3 mb-10">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>

              {/* Extra images */}
              {extraImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {extraImages.map((src, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`${project.title} photo ${i + 2}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link
                  href="/#projects-proven"
                  className="text-slate-500 hover:text-[#0d1b2a] text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
