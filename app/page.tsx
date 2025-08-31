// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { navItems } from '@/data';

// ✅ Client-only for components likely to cause SSR/CSR mismatches
const FloatingNav = dynamic(() => import('@/components/ui/FloatingNav').then(m => m.FloatingNav), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full" suppressHydrationWarning>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Footer />
        </div>
      </div>
    </main>
  );
}