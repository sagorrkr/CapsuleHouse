'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const certifications = [
  {
    name: 'Contract Abiding & Creditworthy Enterprise',
    image: '/images/certifications/Certificate of Contract Abiding and Creditworthy Enterprise.jpg',
  },
  {
    name: 'Integrity Management Demonstration Unit',
    image: '/images/certifications/Certificate of Integrity Management Demonstration Unit.jpg',
  },
  {
    name: 'Quality & Service Integrity Unit',
    image: '/images/certifications/Certificate of Quality and Service Integrity Unit.jpg',
  },
  {
    name: 'Credit Rating Certificate',
    image: '/images/certifications/Credit Rating Certificate.jpg',
  },
  {
    name: 'AAA Rated Credit Enterprise',
    image: '/images/certifications/AAA rated credit enterprise.jpg',
  },
  {
    name: 'Enterprise Credit Rating Certificate',
    image: '/images/certifications/Enterprise Credit Rating Certificate.jpg',
  },
  {
    name: 'Industry Integrity Unit Level Certificate',
    image: '/images/certifications/Industry Integrity Unit Level Certificate.jpg',
  },
  {
    name: 'Integrity Supplier Level Certificate',
    image: '/images/certifications/Integrity Supplier Level Certificate.jpg',
  },
  {
    name: 'Lixin Unit Certificate',
    image: '/images/certifications/Lixin Unit Certificate.jpg',
  },
];

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedCert(null);
  }, []);

  useEffect(() => {
    if (selectedCert !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert, handleKeyDown]);

  // Navigate between certs in lightbox
  const navigate = (direction: 'prev' | 'next') => {
    if (selectedCert === null) return;
    if (direction === 'prev') {
      setSelectedCert(selectedCert === 0 ? certifications.length - 1 : selectedCert - 1);
    } else {
      setSelectedCert(selectedCert === certifications.length - 1 ? 0 : selectedCert + 1);
    }
  };

  return (
    <>
      <section id="certifications" className="py-24 bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block bg-emerald-600/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              Quality Assured
            </span>
            <h2 className="font-heading text-4xl lg:text-6xl font-extrabold text-white mb-4">
              Certifications
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Recognised standards that back every unit we manufacture,
              integrity, quality, and creditworthiness verified by independent authorities.
            </p>
          </div>

          {/* 3×3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <button
                key={cert.name}
                onClick={() => setSelectedCert(index)}
                className="reveal group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden
                           hover:border-emerald-500/40 hover:bg-white/[0.08] transition-all duration-300
                           hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] cursor-pointer text-left"
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-4 py-2 rounded-full">
                      Click to view
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="px-5 py-4 border-t border-white/5 text-center">
                  <h3 className="font-heading text-sm font-bold text-white tracking-wide group-hover:text-emerald-400 transition-colors">
                    {cert.name}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={() => setSelectedCert(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Content */}
          <div
            className="relative z-10 max-w-4xl w-full mx-4 animate-[fadeUp_0.3s_ease_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer"
            >
              <span>Close</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation: Previous */}
            <button
              onClick={() => navigate('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/50 hover:text-white transition-colors cursor-pointer hidden md:block"
              aria-label="Previous certificate"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Navigation: Next */}
            <button
              onClick={() => navigate('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/50 hover:text-white transition-colors cursor-pointer hidden md:block"
              aria-label="Next certificate"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Certificate Image */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-white/5 shadow-2xl">
              <Image
                src={certifications[selectedCert].image}
                alt={certifications[selectedCert].name}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 95vw, 800px"
                priority
              />
            </div>

            {/* Certificate Name + Counter */}
            <div className="mt-4 text-center">
              <h3 className="font-heading text-xl font-bold text-white">
                {certifications[selectedCert].name}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {selectedCert + 1} / {certifications.length}
              </p>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-4 md:hidden">
              <button
                onClick={() => navigate('prev')}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors cursor-pointer"
                aria-label="Previous certificate"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigate('next')}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors cursor-pointer"
                aria-label="Next certificate"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
