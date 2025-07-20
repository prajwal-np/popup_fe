'use client';

import Link from 'next/link';

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
         <div className="max-w-md w-full text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Pop Up</h1>
            <p className="text-gray-600 mb-8">
               Please login or sign up to continue.
            </p>

            <div className="flex justify-center gap-4">
               <Link
                  href="/auth/login"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition"
               >
                  Log In
               </Link>
               <Link
                  href="/auth/signup"
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-medium shadow-md hover:bg-gray-300 transition"
               >
                  Sign Up
               </Link>
            </div>
         </div>
      </div>
   );
}
