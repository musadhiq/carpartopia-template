
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle, Edit, Eye } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectAllProducts, getProducts } from '@/store/productsSlice';
import AdminLayout from '@/components/AdminLayout';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  
  useEffect(() => {
    // Check if user is logged in as admin
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    
    if (!isAdminLoggedIn) {
      navigate('/admin/login');
      return;
    }
    
    dispatch(getProducts());
  }, [dispatch, navigate]);

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <Button asChild>
            <Link to="/admin/products/add">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Product
            </Link>
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <Table>
            <TableCaption>List of all products in inventory</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.condition}</TableCell>
                  <TableCell>{product.brand || 'N/A'}</TableCell>
                  <TableCell>{product.category || 'N/A'}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/product/${product.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/admin/products/edit/${product.id}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
