
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchHero from '@/components/SearchHero';
import FeaturedCategories from '@/components/FeaturedCategories';
import BenefitSection from '@/components/BenefitSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <SearchHero />
        
        <FeaturedCategories />
        
        <BenefitSection />
        
        <FeaturedProducts />
        
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Have Car Parts to Sell?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of sellers on our platform and turn your unused car parts into cash. It's quick, easy, and free to list your items.
                </p>
                <button className="btn-primary group inline-flex items-center">
                  Start Selling Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Car Parts" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
