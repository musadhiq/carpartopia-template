
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  location: string;
  rating: number;
  condition: string;
  sellerName: string;
  sellerContact: string;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  location,
  rating,
  condition,
  sellerName,
  sellerContact,
}: ProductCardProps) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-xs font-medium">
          {condition}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg text-gray-900 line-clamp-1">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="mt-2">
          <p className="text-2xl font-bold text-blue-700">${price.toFixed(2)}</p>
        </div>

        <div className="mt-3 text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center mt-1">
            <Phone className="h-4 w-4 mr-1 text-gray-500" />
            <span>{sellerContact}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between gap-2">
          <Button variant="outline" className="flex-1">
            Details
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
