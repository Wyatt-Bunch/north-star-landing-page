'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import TargetAudience from '@/components/TargetAudience';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <TargetAudience />
      <HowItWorks />
      <Features />
      <CTA onOpenWaitlist={() => setOpen(true)} />
      <Footer />

      <Modal open={open} onClose={() => setOpen(false)}>
      <h2
      id="waitlist-modal"
      className="text-xl font-semibold mb-4 text-center text-navy-900">
      North* Waitlist
      </h2>
        <WaitlistForm />
      </Modal>
    </main>
  );
}
