// src/app/page.tsx
import BlogSection from '../components/global/landing/blog';
import Features from '../components/global/landing/features';
import Footer from '../components/global/landing/footer';
import Header from '../components/global/landing/header';
import Hero from '../components/global/landing/hero';
import NewsletterCTA from '../components/global/landing/newsletter-CTA';
import WhyChooseUs from '../components/global/landing/why-choose-us';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Hero />
        <Features />
        <WhyChooseUs />
        <NewsletterCTA />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
