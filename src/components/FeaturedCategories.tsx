
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    id: 1, 
    name: 'Engine Parts', 
    description: 'Quality engines, radiators, and more', 
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: 1203 
  },
  { 
    id: 2, 
    name: 'Body Parts', 
    description: 'Doors, hoods, bumpers, and fenders', 
    image: 'https://images.unsplash.com/photo-1537378235181-2d64d8f1c438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: 875 
  },
  { 
    id: 3, 
    name: 'Interior', 
    description: 'Seats, dashboards, and trim pieces', 
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: 642 
  },
  { 
    id: 4, 
    name: 'Wheels & Tires', 
    description: 'Rims, wheels, and quality used tires', 
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    count: 398 
  },
];

const FeaturedCategories = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center transition-colors">
            View All Categories 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to="/products" key={category.id} className="group">
              <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-gray-100 mt-1">{category.count} products</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{category.description}</p>
                  <div className="mt-3 flex items-center text-blue-600 font-medium">
                    Browse Parts
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
