'use client'; // Only for App Router – remove this line if using Pages Router

import { useState } from 'react';

export default function UserDetailsPage() {
   const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('User Details:', formData);
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
         <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">User Details</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     className="block w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                     placeholder="Enter your full name"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                     type="tel"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     className="block w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                     placeholder=" Enter your phone number"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="block w-full rounded-xl border border-gray-300 px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                     placeholder="Enter your email address"
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
               >
                  Save Details
               </button>
            </form>
         </div>
      </div>
   );
}
