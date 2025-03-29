
import React from 'react';
import { ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductSortProps {
  onSortChange: (value: string) => void;
  onFilterToggle: () => void;
  totalProducts: number;
  sortBy: string;
}

const ProductSort = ({ onSortChange, onFilterToggle, totalProducts, sortBy }: ProductSortProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <p className="text-gray-600">
          Showing <span className="font-semibold text-gray-900">{totalProducts}</span> results
        </p>
      </div>
      
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Button 
          variant="outline" 
          className="flex items-center md:hidden"
          onClick={onFilterToggle}
        >
          <ListFilter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        
        <div className="flex-1">
          <select
            className="w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="relevance">Sort by: Relevance</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSort;
