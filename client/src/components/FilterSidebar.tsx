
import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

const FilterSidebar = ({ isOpen, onClose, onApplyFilters }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    condition: true,
    price: true,
    location: false,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBrandChange = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleConditionChange = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter((c) => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      priceRange,
      categories: selectedCategories,
      brands: selectedBrands,
      conditions: selectedConditions,
    });
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  const handleResetFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedConditions([]);
  };

  const categories = [
    'Engine Parts',
    'Transmission',
    'Body Parts',
    'Interior',
    'Electronics',
    'Wheels & Tires',
    'Suspension',
    'Brakes',
    'Exhaust',
    'Cooling'
  ];

  const brands = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Nissan',
    'Hyundai'
  ];

  const conditions = [
    'Like New',
    'Excellent',
    'Good',
    'Fair',
    'Salvage'
  ];

  return (
    <div className={`fixed md:relative inset-y-0 left-0 z-40 w-full md:w-64 bg-white md:bg-transparent transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out overflow-y-auto md:overflow-visible md:translate-x-0 border-r`}>
      <div className="p-4 md:p-0 md:pr-4">
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" onClick={onClose} size="icon" className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Categories */}
        <div className="border-b py-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('categories')}
          >
            <h3 className="font-medium">Categories</h3>
            {expandedSections.categories ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
          {expandedSections.categories && (
            <div className="mt-2 space-y-1">
              {categories.map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brands */}
        <div className="border-b py-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('brands')}
          >
            <h3 className="font-medium">Brands</h3>
            {expandedSections.brands ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
          {expandedSections.brands && (
            <div className="mt-2 space-y-1">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Condition */}
        <div className="border-b py-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('condition')}
          >
            <h3 className="font-medium">Condition</h3>
            {expandedSections.condition ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
          {expandedSections.condition && (
            <div className="mt-2 space-y-1">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`condition-${condition}`}
                    checked={selectedConditions.includes(condition)}
                    onChange={() => handleConditionChange(condition)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor={`condition-${condition}`} className="ml-2 text-sm text-gray-700">
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="border-b py-4">
          <div 
            className="flex justify-between items-center cursor-pointer" 
            onClick={() => toggleSection('price')}
          >
            <h3 className="font-medium">Price Range</h3>
            {expandedSections.price ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
          {expandedSections.price && (
            <div className="mt-4 px-2">
              <Slider
                defaultValue={priceRange}
                max={1000}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        <div className="py-4 space-y-3">
          <Button 
            onClick={handleApplyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Apply Filters
          </Button>
          <Button 
            variant="outline" 
            onClick={handleResetFilters}
            className="w-full"
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
