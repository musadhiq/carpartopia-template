
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

// Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  location: string;
  rating: number;
  condition: string;
  sellerName: string;
  sellerContact: string;
  features?: string[];
  compatibility?: string[];
  brand?: string;
  category?: string;
}

// Initial state with dummy data
const initialState = {
  products: [
    {
      id: '1',
      name: 'Toyota Camry Alternator (2015-2018)',
      price: 129.99,
      images: [
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1597767511592-1228d59f94f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'OEM Toyota Camry alternator in excellent condition. Removed from a 2016 model with only 45,000 miles. Fully tested and guaranteed to work.',
      location: 'Chicago, IL',
      rating: 4.7,
      condition: 'Excellent',
      sellerName: 'Mike\'s Auto Parts',
      sellerContact: '(312) 555-7890',
      features: ['90 Amp', 'OEM Part', '1-Year Warranty'],
      compatibility: ['Toyota Camry 2015-2018', 'Toyota Avalon 2016-2018'],
      brand: 'Toyota',
      category: 'Electrical'
    },
    {
      id: '2',
      name: 'BMW 3 Series Headlight Assembly (2018)',
      price: 249.99,
      images: [
        'https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Right side headlight assembly for BMW 3 Series. Minor wear but fully functional. Xenon lights with LED daytime running lights.',
      location: 'Dallas, TX',
      rating: 4.5,
      condition: 'Good',
      sellerName: 'Premium Auto Parts',
      sellerContact: '(214) 555-1234',
      features: ['Xenon Lights', 'LED Daytime Running Lights', 'Original BMW Part'],
      compatibility: ['BMW 3 Series 2018-2019'],
      brand: 'BMW',
      category: 'Lighting'
    },
    {
      id: '3',
      name: 'Honda Civic Front Bumper (2016-2020)',
      price: 185.00,
      images: [
        'https://images.unsplash.com/photo-1549399542-7e8f2e928464?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Front bumper for Honda Civic in excellent condition. Color is Modern Steel Metallic (NH-797M). No cracks or major scratches.',
      location: 'Miami, FL',
      rating: 4.8,
      condition: 'Like New',
      sellerName: 'AutoSave Dismantlers',
      sellerContact: '(305) 555-9876',
      features: ['OEM Part', 'Modern Steel Metallic', 'Includes Fog Light Covers'],
      compatibility: ['Honda Civic 2016-2020'],
      brand: 'Honda',
      category: 'Body Parts'
    },
    {
      id: '4',
      name: 'Ford F-150 Tail Light Assembly (2015)',
      price: 89.99,
      images: [
        'https://images.unsplash.com/photo-1562426509-5044a121aa49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Left rear tail light assembly for Ford F-150. Removed from a 2015 model. In good working condition with minor scratches on the outer lens.',
      location: 'Atlanta, GA',
      rating: 4.3,
      condition: 'Good',
      sellerName: 'Truck Parts Depot',
      sellerContact: '(404) 555-4321',
      features: ['Original Ford Part', 'Complete Assembly', 'All Bulbs Included'],
      compatibility: ['Ford F-150 2015-2017'],
      brand: 'Ford',
      category: 'Lighting'
    },
    {
      id: '5',
      name: 'Chevrolet Silverado Grille (2014-2015)',
      price: 149.95,
      images: [
        'https://images.unsplash.com/photo-1563198774-0f434dc64c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1596391922394-5591e1400382?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1588258219601-125e0dc70aee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Chrome front grille for Chevrolet Silverado. Fits 2014-2015 models. In excellent condition with no dents or damage.',
      location: 'Denver, CO',
      rating: 4.6,
      condition: 'Excellent',
      sellerName: 'Mountain Auto Salvage',
      sellerContact: '(720) 555-6543',
      features: ['Chrome Finish', 'OEM Part', 'Complete with Emblem'],
      compatibility: ['Chevrolet Silverado 2014-2015'],
      brand: 'Chevrolet',
      category: 'Exterior'
    },
    {
      id: '6',
      name: 'Audi A4 Side Mirror (2016)',
      price: 124.50,
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Right side mirror for Audi A4. Power folding with heating function. Color is Brilliant Black. Minor wear but everything works perfectly.',
      location: 'Seattle, WA',
      rating: 4.9,
      condition: 'Like New',
      sellerName: 'European Auto Parts',
      sellerContact: '(206) 555-8765',
      features: ['Power Folding', 'Heated', 'Turn Signal Integrated'],
      compatibility: ['Audi A4 2016-2018', 'Audi S4 2017-2018'],
      brand: 'Audi',
      category: 'Exterior'
    },
    {
      id: '7',
      name: 'Mercedes-Benz C-Class Steering Wheel (2017)',
      price: 299.99,
      images: [
        'https://images.unsplash.com/photo-1546446540-b08bdbf3e374?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1620294742958-77f8ca30a45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Leather steering wheel for Mercedes-Benz C-Class. Removed from a 2017 model. Includes multi-function controls and paddle shifters.',
      location: 'Los Angeles, CA',
      rating: 4.7,
      condition: 'Excellent',
      sellerName: 'Luxury Parts Inc',
      sellerContact: '(323) 555-2109',
      features: ['Leather Wrapped', 'Multi-Function Controls', 'Paddle Shifters'],
      compatibility: ['Mercedes-Benz C-Class 2015-2018', 'Mercedes-Benz GLC 2016-2018'],
      brand: 'Mercedes-Benz',
      category: 'Interior'
    },
    {
      id: '8',
      name: 'Volkswagen Golf Transmission (2015)',
      price: 799.99,
      images: [
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1516548408488-96c82d1f98dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ],
      description: 'Manual 6-speed transmission for Volkswagen Golf. Pulled from a 2015 GTI with 62,000 miles. Shifts smoothly through all gears.',
      location: 'Philadelphia, PA',
      rating: 4.4,
      condition: 'Good',
      sellerName: 'German Auto Recyclers',
      sellerContact: '(215) 555-3434',
      features: ['6-Speed Manual', '62k Miles', '90-Day Warranty'],
      compatibility: ['Volkswagen Golf 2014-2016', 'Volkswagen GTI 2014-2016', 'Audi A3 2015-2016'],
      brand: 'Volkswagen',
      category: 'Transmission'
    }
  ],
  loading: false,
  error: null,
  selectedProduct: null as Product | null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
      state.error = null;
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.loading = false;
    },
    getProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductById: (state, action: PayloadAction<string>) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
    }
  },
});

export const { getProducts, getProductsSuccess, getProductsFailure, getProductById } = productsSlice.actions;

// Selectors
export const selectAllProducts = (state: RootState) => state.products.products;
export const selectProductById = (state: RootState, productId: string) => 
  state.products.products.find(product => product.id === productId);
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
