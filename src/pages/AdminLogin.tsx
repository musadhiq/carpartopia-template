
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple dummy authentication
    if (username === 'admin' && password === 'admin') {
      // Set a flag in localStorage to indicate admin is logged in
      localStorage.setItem('adminLoggedIn', 'true');
      toast({
        title: "Login successful",
        description: "Welcome to admin dashboard",
        variant: "default",
      });
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password. Try 'admin' for both fields.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Car<span className="text-orange-500">Partopia</span></h1>
          <h2 className="text-2xl font-semibold mt-4 text-gray-800">Admin Login</h2>
          <p className="text-gray-600 mt-2">Enter your credentials to access the admin dashboard</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Hint: Use 'admin' for both username and password</p>
            </div>
            
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
