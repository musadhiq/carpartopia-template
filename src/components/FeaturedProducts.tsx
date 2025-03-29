
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Toyota Camry Alternator (2015-2018)',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Chicago, IL',
    rating: 4.7,
    condition: 'Excellent',
    sellerName: 'Mike\'s Auto Parts',
    sellerContact: '(312) 555-7890'
  },
  {
    id: '2',
    name: 'BMW 3 Series Headlight Assembly (2018)',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Dallas, TX',
    rating: 4.5,
    condition: 'Good',
    sellerName: 'Premium Auto Parts',
    sellerContact: '(214) 555-1234'
  },
  {
    id: '3',
    name: 'Honda Civic Front Bumper (2016-2020)',
    price: 185.00,
    image: 'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Miami, FL',
    rating: 4.8,
    condition: 'Like New',
    sellerName: 'AutoSave Dismantlers',
    sellerContact: '(305) 555-9876'
  },
  {
    id: '4',
    name: 'Ford F-150 Tail Light Assembly (2015)',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Atlanta, GA',
    rating: 4.3,
    condition: 'Good',
    sellerName: 'Truck Parts Depot',
    sellerContact: '(404) 555-4321'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center transition-colors">
            View All Products 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
