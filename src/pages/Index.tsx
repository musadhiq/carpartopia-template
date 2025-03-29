
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchHero from '@/components/SearchHero';
import FeaturedCategories from '@/components/FeaturedCategories';
import BenefitSection from '@/components/BenefitSection';
import FeaturedProducts from '@/components/FeaturedProducts';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SearchHero />
        
        <FeaturedCategories />
        
        <BenefitSection />
        
        <FeaturedProducts />
        
        <section className="section bg-blue-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Car Parts to Sell?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of sellers on our platform and turn your unused car parts into cash. It's quick, easy, and free to list your items.
            </p>
            <button className="btn-accent px-8 py-4 text-lg">
              Start Selling Today
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
