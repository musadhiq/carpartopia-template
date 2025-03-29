
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useAppSelector } from '../store/hooks';
import { selectAllProducts } from '../store/productsSlice';

const FeaturedProducts = () => {
  const allProducts = useAppSelector(selectAllProducts);
  // Get first 4 products as featured
  const featuredProducts = allProducts.slice(0, 4);

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
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
              location={product.location}
              rating={product.rating}
              condition={product.condition}
              sellerName={product.sellerName}
              sellerContact={product.sellerContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
