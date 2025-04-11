
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getProductById, selectSelectedProduct } from '../store/productsSlice';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, MapPin, Phone, Tag, CheckCircle2, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectSelectedProduct);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container-custom flex-grow py-12 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Loading product details...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="container-custom flex-grow py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg bg-gray-100 aspect-square">
                          <img
                            src={image}
                            alt={`${product.name} - image ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(0, 4).map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square rounded-md overflow-hidden border border-gray-300 cursor-pointer hover:border-blue-500"
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-orange-500 text-white rounded-full">
                    {product.condition}
                  </span>
                  <div className="flex items-center ml-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm ml-1 font-medium">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-4xl font-bold text-blue-700 mt-2">${product.price.toFixed(2)}</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {product.features && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {product.compatibility && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Compatible With</h3>
                  <ul className="space-y-1">
                    {product.compatibility.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <Tag className="h-4 w-4 text-blue-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold mb-3">Seller Information</h3>
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">{product.sellerName}</p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {product.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {product.sellerContact}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <ShieldCheck className="h-5 w-5 text-blue-600 mr-2" />
                All parts are inspected and verified before listing
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
