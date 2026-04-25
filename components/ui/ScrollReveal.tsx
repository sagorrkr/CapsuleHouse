'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll<Element>('.reveal'));

    // Immediately activate elements already in the viewport — must happen
    // before setting data-reveal="on", otherwise they'd flash invisible.
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('active');
      }
    });

    // Now enable the hide-until-scroll behaviour for below-fold elements.
    document.documentElement.setAttribute('data-reveal', 'on');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('active')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
