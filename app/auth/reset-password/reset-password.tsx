"use client"
import { useState } from "react";

export default function ResetPasswordComponent() {
   const [password, setPassword] = useState('');
   const [confirm, setConfirm] = useState('');

   const handleReset = (e: any) => {
      e.preventDefault();
      if (password !== confirm) {
         alert('Passwords do not match');
         return;
      }
      alert('Password reset successful!');
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
         <div className="max-w-md w-full bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
            <form onSubmit={handleReset} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                     type="password"
                     value={confirm}
                     onChange={(e) => setConfirm(e.target.value)}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
               >
                  Reset Password
               </button>
            </form>
         </div>
      </div>
   );
}