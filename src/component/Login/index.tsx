'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Create_Account from '@/component/Create_Acc_Button';
import { GoChevronRight } from "react-icons/go";
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'
import router from 'next/router';
import { hasCustomGetInitialProps } from 'next/dist/build/utils';
// import { useNavigate } from 'react-router-dom';

type Props = {};

function Login({ }: Props) {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  // let navigate = useNavigate();

  // const handleLogin = async () => {
  //     if (!email || !password) {
  //         setError(true)
  //     }
  //     else {
  //         setError(false)
  //     }
  //     // console.log(email,password);
  //     // let response = await fetch("http://localhost:3000/api/resortapi", {
  //     //     method: "POST",
  //     //     body: JSON.stringify({ email, password, login: true })
  //     // });
  //     // response = await response.json();
  //     // if(response.success){
  //     //     alert("Login Successful")
  //     // }

  // }


  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return; // Prevent further execution if fields are empty
    }
    setError(false);

    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, { // Assuming your backend is served on the same host
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();

      if (data.token) {
        // Handle login success
        alert("Login Successful")
        console.log("Login Successful", data);
        // console.log(router);
        // router.push("/")
        window.location.href='http://localhost:3000/List'
        // navigate('@/src/app/List/page.tsx'); 
        // redirect("/")

        // Redirect or store the JWT token as needed
      } else {
        // Handle login failure
        alert("Login Failed...")
        console.error("Login Failed", data.message);
        setError(true);
      }
    } catch (error) {
      console.error("An error occurred", error);
      setError(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
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
                Email address
              </label>
              {/* <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              /> */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              {/* <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              /> */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* <Link href="/forget" className="block text-xs text-red-600 hover:underline">
              Forget Password?
            </Link> */}
            <div className="mt-4">
              {/* <Create_Account text={'Sign in'} /> */}
              <button className="w-full h-14 p-3 text-lg bg-[#E46A4B] font-inter text-white border border-dashed border-white rounded-lg hover:bg-gray-900 " onClick={handleLogin} >
                  <div className="inline-block">Sign in</div><div className="inline-block"> <GoChevronRight /> </div>
                </ button>
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
