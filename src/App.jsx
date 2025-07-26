
import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/hooks/useLanguage';

function App() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang={language} />
        <title>
          {language === 'fr' 
            ? 'PROXYB Soins Montcalm Inc. - Soins à domicile de qualité' 
            : 'PROXYB Soins Montcalm Inc. - Quality Home Care Services'
          }
        </title>
        <meta 
          name="description" 
          content={
            language === 'fr'
              ? 'Services de soins à domicile professionnels et compatissants pour les personnes âgées. Soins fiables, personnalisés et adaptés aux besoins de votre famille à Montréal.'
              : 'Professional and compassionate home care services for the elderly. Reliable, personalized care tailored to your family\'s needs in Montreal.'
          } 
        />
        <meta name="keywords" content={
          language === 'fr'
            ? 'soins à domicile, personnes âgées, Montréal, soins privés, aide à domicile, PROXYB'
            : 'home care, elderly care, Montreal, private care, home support, PROXYB'
        } />
        <meta property="og:title" content={
          language === 'fr' 
            ? 'PROXYB Soins Montcalm Inc. - Soins à domicile de qualité' 
            : 'PROXYB Soins Montcalm Inc. - Quality Home Care Services'
        } />
        <meta property="og:description" content={
          language === 'fr'
            ? 'Services de soins à domicile professionnels et compatissants pour les personnes âgées.'
            : 'Professional and compassionate home care services for the elderly.'
        } />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
