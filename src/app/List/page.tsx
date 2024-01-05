import Image from 'next/image'
import Nav from '@/component/Nav_Exp'

import Footer from '@/container/Footer'

import Sort from '@/component/Sorting'
import Products from '@/component/List_Items'

import App from '@/component/Dropdown'
export default function Home() {
  return (
    <main className=''>
      <div className="relative flex z-20">
        <Nav></Nav>
      </div>

      <div className=' mt-5 md:mt-10 lg:mt-20 p-0 md:py-10 md:p-20 mb-10 mx-4 '>
        <h6 className='text-xs text-gray-500'>Home/Shop </h6>
        <h1 className='text-lg mb-10'>Shop</h1>
        <div className='flex flex-wrap '>

          <div className=' w-full md:w-1/5 lg:w-1/5 h-full '>
            <hr />
            <h3 className='underline py-5 justify-center'>Clear All</h3>
            <hr />
            <App />
          </div>
           

          <div className=' w-full md:w-3/4 lg:w-3/4 h-full justify-center  pl-0 md:pl-10 lg:pl-10  object-contain'>
            <hr />
            <div className='mb-10 p-4 hidden md:block lg:block object-cover' ><Sort /> </div>
            <hr />
            <div className=''>
              <Products />
            </div>
          </div>
          <div>
          </div>

        </div>

      </div>

      <div>
        <Footer />
      </div>

    </main>
  )
}