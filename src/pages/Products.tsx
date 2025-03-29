
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import ProductSort from '@/components/ProductSort';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProducts, selectAllProducts } from '../store/productsSlice';

const Products = () => {
  const dispatch = useAppDispatch();
  const allProducts = useAppSelector(selectAllProducts);
  
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
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  // This would normally have more filtering logic based on the Redux state
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
