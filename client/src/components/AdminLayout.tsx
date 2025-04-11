
import React, { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard,
  Package,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    navigate('/admin/login');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white shadow-md">
        <div className="container-custom mx-auto flex h-16 items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center">
            <span className="text-blue-400 font-bold text-xl">Car<span className="text-orange-400">Partopia</span> Admin</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      {/* Admin Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-64 flex-shrink-0 hidden md:block">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <LayoutDashboard className="h-5 w-5 mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Package className="h-5 w-5 mr-3" />
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
