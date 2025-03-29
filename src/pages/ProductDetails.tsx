
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Phone, Clock, Info, Tag, Check } from 'lucide-react';

// Mock data for products (in a real app, this would come from an API)
const productData = [
  {
    id: '1',
    name: 'Toyota Camry Alternator (2015-2018)',
    price: 129.99,
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    description: 'High-quality OEM alternator for Toyota Camry models from 2015-2018. This part is in excellent condition with minimal wear and has been tested to ensure functionality.',
    specifications: [
      { name: 'Condition', value: 'Excellent' },
      { name: 'Brand', value: 'Toyota OEM' },
      { name: 'Part Number', value: 'TC-ALT-1518' },
      { name: 'Compatibility', value: 'Toyota Camry 2015-2018' },
      { name: 'Warranty', value: '60 days' },
    ],
    location: 'Chicago, IL',
    rating: 4.7,
    condition: 'Excellent',
    sellerName: 'Mike\'s Auto Parts',
    sellerContact: '(312) 555-7890',
    listedDate: '2023-04-15',
  },
  {
    id: '2',
    name: 'BMW 3 Series Headlight Assembly (2018)',
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    description: 'Genuine BMW headlight assembly for 3 Series 2018 models. This is a right-side assembly with LED technology. In good condition with minimal cosmetic wear and fully functional.',
    specifications: [
      { name: 'Condition', value: 'Good' },
      { name: 'Brand', value: 'BMW OEM' },
      { name: 'Part Number', value: 'BM-HL-3S-18R' },
      { name: 'Compatibility', value: 'BMW 3 Series 2018' },
      { name: 'Warranty', value: '30 days' },
    ],
    location: 'Dallas, TX',
    rating: 4.5,
    condition: 'Good',
    sellerName: 'Premium Auto Parts',
    sellerContact: '(214) 555-1234',
    listedDate: '2023-05-22',
  },
  {
    id: '3',
    name: 'Honda Civic Front Bumper (2016-2020)',
    price: 185.00,
    images: [
      'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    description: 'Honda Civic front bumper in Like New condition. Fits models from 2016-2020. This bumper has been professionally detailed and has no scratches or dents.',
    specifications: [
      { name: 'Condition', value: 'Like New' },
      { name: 'Brand', value: 'Honda OEM' },
      { name: 'Part Number', value: 'HC-FB-1620' },
      { name: 'Compatibility', value: 'Honda Civic 2016-2020' },
      { name: 'Warranty', value: '90 days' },
    ],
    location: 'Miami, FL',
    rating: 4.8,
    condition: 'Like New',
    sellerName: 'AutoSave Dismantlers',
    sellerContact: '(305) 555-9876',
    listedDate: '2023-03-10',
  },
  {
    id: '4',
    name: 'Ford F-150 Tail Light Assembly (2015)',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    ],
    description: 'Left-side tail light assembly for 2015 Ford F-150. In good condition with no cracks or leaks. All electrical components function properly.',
    specifications: [
      { name: 'Condition', value: 'Good' },
      { name: 'Brand', value: 'Ford OEM' },
      { name: 'Part Number', value: 'FD-TL-15L' },
      { name: 'Compatibility', value: 'Ford F-150 2015' },
      { name: 'Warranty', value: '45 days' },
    ],
    location: 'Atlanta, GA',
    rating: 4.3,
    condition: 'Good',
    sellerName: 'Truck Parts Depot',
    sellerContact: '(404) 555-4321',
    listedDate: '2023-06-05',
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = productData.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="container-custom">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
              <p className="mt-4 text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Images */}
              <div>
                <Carousel className="w-full">
                  <CarouselContent>
                    {product.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex items-center justify-center p-0">
                              <img 
                                src={image} 
                                alt={`${product.name} - image ${index + 1}`} 
                                className="rounded-md object-cover h-[300px] w-full"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {product.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="h-20 rounded-md overflow-hidden border-2 border-gray-200 cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Product Details */}
              <div>
                <div className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-medium rounded-full mb-4">
                  {product.condition}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500 mr-4">
                    <Star className="h-5 w-5 fill-yellow-500" />
                    <span className="ml-1 font-medium">{product.rating.toFixed(1)}</span>
                  </div>
                  
                  <div className="text-gray-500 text-sm">
                    Listed on {product.listedDate}
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-blue-700 mb-6">
                  ${product.price.toFixed(2)}
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <div>
                          <span className="font-medium">{spec.name}:</span> {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Info className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="font-medium">{product.sellerName}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-gray-500 mr-3" />
                      <span>{product.sellerContact}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                      <span>{product.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
