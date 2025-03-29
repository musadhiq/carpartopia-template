
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectProductById } from '@/store/productsSlice';
import AdminLayout from '@/components/AdminLayout';

// This component is used for both adding and editing products
const AdminProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const isEditMode = !!id;
  
  // Get product if in edit mode
  const existingProduct = useAppSelector(state => 
    isEditMode ? selectProductById(state, id!) : null
  );
  
  const [imageUrls, setImageUrls] = useState<string[]>(['', '', '', '']);
  
  // Initialize the form
  const form = useForm({
    defaultValues: {
      name: '',
      price: '',
      description: '',
      location: '',
      condition: '',
      brand: '',
      category: '',
      sellerName: '',
      sellerContact: '',
    }
  });
  
  // Load existing product data if in edit mode
  useEffect(() => {
    if (isEditMode && existingProduct) {
      form.reset({
        name: existingProduct.name,
        price: existingProduct.price.toString(),
        description: existingProduct.description,
        location: existingProduct.location,
        condition: existingProduct.condition,
        brand: existingProduct.brand || '',
        category: existingProduct.category || '',
        sellerName: existingProduct.sellerName,
        sellerContact: existingProduct.sellerContact,
      });
      
      // Load existing image URLs (up to 4)
      const existingImages = [...existingProduct.images];
      while (existingImages.length < 4) {
        existingImages.push('');
      }
      setImageUrls(existingImages.slice(0, 4));
    }
  }, [existingProduct, form, isEditMode]);
  
  const onSubmit = (data: any) => {
    // Filter out empty image URLs
    const filteredImages = imageUrls.filter(url => url.trim() !== '');
    
    if (filteredImages.length === 0) {
      toast({
        title: "Validation Error",
        description: "At least one image URL is required",
        variant: "destructive",
      });
      return;
    }
    
    const productData = {
      ...data,
      price: parseFloat(data.price),
      images: filteredImages,
    };
    
    // This would normally dispatch an action to add/update the product
    // For this dummy example, we'll just show a toast and navigate back
    
    toast({
      title: isEditMode ? "Product Updated" : "Product Added",
      description: `${data.name} has been ${isEditMode ? 'updated' : 'added'} successfully`,
    });
    
    navigate('/admin/dashboard');
  };
  
  const handleImageChange = (index: number, value: string) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };
  
  return (
    <AdminLayout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditMode ? 'Edit Product' : 'Add New Product'}
          </h1>
          <p className="text-gray-600">
            {isEditMode 
              ? 'Update the product information below' 
              : 'Fill in the details to add a new product'}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name*</FormLabel>
                    <FormControl>
                      <Input required placeholder="Enter product name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price ($)*</FormLabel>
                    <FormControl>
                      <Input 
                        required 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        placeholder="0.00" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter brand name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter category" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition*</FormLabel>
                    <FormControl>
                      <Input required placeholder="Like New, Good, etc." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location*</FormLabel>
                    <FormControl>
                      <Input required placeholder="City, State" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="sellerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seller Name*</FormLabel>
                    <FormControl>
                      <Input required placeholder="Enter seller name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="sellerContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seller Contact*</FormLabel>
                    <FormControl>
                      <Input required placeholder="Phone or email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description*</FormLabel>
                  <FormControl>
                    <textarea 
                      className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required 
                      placeholder="Detailed description of the product" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="space-y-4">
              <h3 className="text-md font-medium">Product Images (Max 4)*</h3>
              <FormDescription>
                At least one image URL is required. You can add up to 4 images.
              </FormDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((index) => (
                  <FormItem key={index}>
                    <FormLabel>Image URL {index + 1}{index === 0 ? '*' : ''}</FormLabel>
                    <FormControl>
                      <Input 
                        required={index === 0} 
                        placeholder="https://example.com/image.jpg" 
                        value={imageUrls[index]} 
                        onChange={e => handleImageChange(index, e.target.value)} 
                      />
                    </FormControl>
                  </FormItem>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/admin/dashboard')}
              >
                Cancel
              </Button>
              <Button type="submit">
                {isEditMode ? 'Update Product' : 'Add Product'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProductForm;
