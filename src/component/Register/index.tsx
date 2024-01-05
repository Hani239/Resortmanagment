'use client';
import Select_options from '@/component/Button';
import Create_Account from '@/component/Create_Acc_Button';
import Link from 'next/link';
import React, { useState,FC,ChangeEvent,FormEvent } from 'react'

type Props = {};

function Register({}: Props) {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="w-full px-4 lg:px-0 sm:max-w-xl">
          <div className="p-6 rounded-md border-2 shadow-md">
            <form className="">
              <div>
                <h1 className="text-4xl font-bold text-center text-gray-700">Create Account</h1>
                <h6 className="text-sm font-normal text-center text-gray-700">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                <Link href="/privacy_policy" className='text-red-600'> privacy policy</Link>.
                </h6>
              </div>
              <br />
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-semibold text-gray-800">
                  Username
                </label>
                <input
                  type="text"
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
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-4">
              <Create_Account text={'Create Account'}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
