'use client'; // only for App Router
import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function SignupPageComponent() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Signup Data:', formData);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
         <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input
                     type="text"
                     name="name"
                     onChange={handleChange}
                     value={formData.name}
                     required
                     className="w-full"
                     placeholder="John Doe"
                  />
               </div>
               <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input
                     type="email"
                     name="email"
                     onChange={handleChange}
                     value={formData.email}
                     required
                     className="w-full"
                     placeholder="you@example.com"
                  />
               </div>
               <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <Input
                     type="password"
                     name="password"
                     onChange={handleChange}
                     value={formData.password}
                     required
                     className="w-full"
                     placeholder="••••••••"
                  />
               </div>
               <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
               >
                  Sign Up
               </button>
            </form>
            <p className="text-sm text-center text-gray-500 mt-4">
               Already have an account?{' '}
               <Link href="/auth/login" className="text-blue-600 hover:underline">
                  Log in
               </Link>
            </p>
         </div>
      </div>
   );
}
