import React from 'react';
import Link from 'next/link';
import Create_Account from '@/component/Create_Acc_Button';

type Props = {};

function Login({ }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full px-4 lg:px-0 sm:max-w-xl">
        <div className="p-6 bg-white rounded-md border-2 shadow-md">
          <form className="">
            <div>
              <h1 className="text-4xl font-bold text-center text-gray-700">Welcome Back</h1>
              <h6 className="text-sm font-normal text-center text-gray-700">
                Please sign in to access your full account
              </h6>
            </div>
            <br />
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                Username or email address
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link href="/forget" className="block text-xs text-red-600 hover:underline">
              Forget Password?
            </Link>
            <div className="mt-4">
              <Create_Account text={'Sign in'} />
            </div>
          </form>
          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-red-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
