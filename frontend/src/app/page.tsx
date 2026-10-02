import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { UserJourneys } from '@/components/sections/UserJourneys';
import { AboutSection } from '@/components/sections/AboutSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ResponsibleRecruitment } from '@/components/sections/ResponsibleRecruitment';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'MyRecruit Ltd | Professional Recruitment Agency Mauritius',
  description:
    'MyRecruit Ltd is a licensed recruitment agency in Mauritius specialising in overseas worker recruitment. We connect Mauritian employers with qualified international talent.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UserJourneys />
      <AboutSection />
      <SectorsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ResponsibleRecruitment />
      <FAQSection />
      <ContactSection />
      <CTABanner />
    </>
  );
}
