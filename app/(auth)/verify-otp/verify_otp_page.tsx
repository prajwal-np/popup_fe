"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function VerifyOtp() {
   const [otp, setOtp] = useState('');
   const router = useRouter();

   const handleVerify = (e: any) => {
      e.preventDefault();
      router.push('/reset-password');
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
         <div className="max-w-md w-full bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>
            <form onSubmit={handleVerify} className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                  <input
                     type="text"
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}
                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="6-digit OTP"
                     required
                  />
               </div>
               <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
               >
                  Verify
               </button>
            </form>
         </div>
      </div>
   );
}
