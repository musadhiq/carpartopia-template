
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="bg-white py-20 px-4">
      <div className="container-custom mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Find the <span className="text-blue-600">Perfect</span> Car Part
          </h1>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Quality second-hand car parts at affordable prices. Search from thousands of verified sellers.
          </p>
        </div>
        
        <Card className="max-w-5xl mx-auto shadow-lg border-0 overflow-hidden">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">
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
                      className="rounded-l-none bg-blue-600 hover:bg-blue-700"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                >
                  Browse All Parts
                </Button>
                <Button 
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Sell Your Parts
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by thousands of customers worldwide</p>
          <div className="flex justify-center space-x-8 opacity-70">
            <img src="https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=120&h=50&q=60" 
                 alt="Toyota" className="h-10 grayscale" />
            <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=120&h=50&q=60" 
                 alt="Honda" className="h-10 grayscale" />
            <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=120&h=50&q=60" 
                 alt="Ford" className="h-10 grayscale" />
            <img src="https://images.unsplash.com/photo-1626661868141-77a2d33f0e36?auto=format&fit=crop&w=120&h=50&q=60" 
                 alt="BMW" className="h-10 grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
