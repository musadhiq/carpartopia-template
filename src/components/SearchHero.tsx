
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carBrands = [
  'All Brands', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen'
];

const partCategories = [
  'All Categories', 'Engine', 'Transmission', 'Body Parts', 'Interior', 'Electronics', 'Wheels & Tires'
];

const SearchHero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { searchTerm, selectedBrand, selectedCategory });
    // Handle search logic here
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
      <div className="container-custom mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the Perfect Car Part</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
          Quality second-hand car parts at affordable prices. Search from thousands of verified sellers.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-5xl mx-auto bg-white p-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for parts (e.g., 'Honda Civic Headlight')"
                  className="py-3 pl-10 pr-4 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <select 
                className="w-full py-3 px-4 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {carBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            
            <div>
              <div className="flex">
                <select 
                  className="w-full py-3 px-4 rounded-l-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {partCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Button 
                  type="submit" 
                  className="rounded-l-none bg-orange-500 hover:bg-orange-600"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </form>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-700 transition-colors"
          >
            Browse All Parts
          </Button>
          <Button 
            className="bg-orange-500 hover:bg-orange-600"
          >
            Sell Your Parts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
