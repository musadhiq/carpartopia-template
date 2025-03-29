
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductSort from '@/components/ProductSort';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for products
const allProducts = [
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
  },
  {
    id: '5',
    name: 'Chevrolet Silverado Grille (2014-2015)',
    price: 149.95,
    image: 'https://images.unsplash.com/photo-1563198774-0f434dc64c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Denver, CO',
    rating: 4.6,
    condition: 'Excellent',
    sellerName: 'Mountain Auto Salvage',
    sellerContact: '(720) 555-6543'
  },
  {
    id: '6',
    name: 'Audi A4 Side Mirror (2016)',
    price: 124.50,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Seattle, WA',
    rating: 4.9,
    condition: 'Like New',
    sellerName: 'European Auto Parts',
    sellerContact: '(206) 555-8765'
  },
  {
    id: '7',
    name: 'Mercedes-Benz C-Class Steering Wheel (2017)',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546446540-b08bdbf3e374?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Los Angeles, CA',
    rating: 4.7,
    condition: 'Excellent',
    sellerName: 'Luxury Parts Inc',
    sellerContact: '(323) 555-2109'
  },
  {
    id: '8',
    name: 'Volkswagen Golf Transmission (2015)',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    location: 'Philadelphia, PA',
    rating: 4.4,
    condition: 'Good',
    sellerName: 'German Auto Recyclers',
    sellerContact: '(215) 555-3434'
  }
];

const Products = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    categories: [],
    brands: [],
    conditions: []
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  
  // This would normally be handled by an API call with filters
  const filteredProducts = allProducts;
  
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };
  
  const handleSortChange = (value: string) => {
    setSortBy(value);
    // Would normally sort products here
  };
  
  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    // Would normally filter products here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-6 pb-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Car Parts</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Overlay for mobile when filter is open */}
            {filterOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                onClick={() => setFilterOpen(false)}
              ></div>
            )}
            
            {/* Filter Sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <FilterSidebar 
                isOpen={filterOpen}
                onClose={() => setFilterOpen(false)}
                onApplyFilters={handleApplyFilters}
              />
            </div>
            
            {/* Product Grid */}
            <div className="flex-1">
              <ProductSort 
                onSortChange={handleSortChange}
                onFilterToggle={handleFilterToggle}
                totalProducts={filteredProducts.length}
                sortBy={sortBy}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(curr => Math.max(curr - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          className={`h-9 w-9 ${currentPage === page ? 'bg-blue-600' : ''}`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(curr => Math.min(curr + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
