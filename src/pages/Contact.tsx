
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import MapSection from '@/components/MapSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container-custom py-12 md:py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We're here to help with any questions or concerns about second-hand car parts.
          </p>
          
          <ContactForm />
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
            <MapSection />
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How do I know the parts are of good quality?</h3>
                <p className="mt-2 text-gray-600">
                  All parts on our platform are thoroughly inspected by the sellers and verified by our team. We also have a rating system for sellers based on customer feedback.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What if I receive a damaged part?</h3>
                <p className="mt-2 text-gray-600">
                  If you receive a damaged part, please contact us immediately with photos. We'll help coordinate with the seller for a replacement or refund according to our return policy.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How much does shipping cost?</h3>
                <p className="mt-2 text-gray-600">
                  Shipping costs vary depending on the size and weight of the part, as well as your location. Exact shipping costs are calculated at checkout.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900">How can I sell my own parts on the platform?</h3>
                <p className="mt-2 text-gray-600">
                  You can create a seller account, verify your identity, and start listing your parts. We provide guidelines on how to properly photograph and describe your parts to maximize sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
