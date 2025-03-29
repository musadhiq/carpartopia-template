
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-blue-800 font-bold text-2xl">Car<span className="text-orange-500">Partopia</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Products
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search parts..."
              className="py-2 pl-8 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <Link to="/admin/login">
            <Button variant="ghost" size="sm" className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-50">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between border rounded-full px-3 py-2 bg-gray-50">
              <input type="text" placeholder="Search parts..." className="bg-transparent focus:outline-none flex-1" />
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <nav className="space-y-3">
              <Link 
                to="/" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/admin/login" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Admin Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
