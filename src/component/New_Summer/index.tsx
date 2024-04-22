'use client';
import Product from '@/component/Products'

import React, { useState, useEffect } from 'react';
import Button from '../Button';
import Link from 'next/link'

type Props = {} & React.HTMLAttributes<HTMLElement>;

const New_Summer = ({ className, children, ...props }: Props) => {

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${ API_BASE_URL }/user/rooms`, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
    return () => {
      abortController.abort();
    };
  }, [API_BASE_URL]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='md:mx-20 mx-5'>

        <div className='snap - mandatory snap-x wrapper flex overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}'>


          {rooms.map(room => (
            <div key={room._id}>


              <div className='inline-block'>
                <div className="relative group border-none rounded-lg grid justify-center items-centersnap-center sm:snap-start m-5 w-[270px] h-[250px] md:w-96 md:h-72">
                  <div>
                    <img
                      src={room.imageUrl}
                      alt={"Room"}
                      className='h-full w-full group-hover:scale-110 transition duration-500 cursor-pointer'

                    />
                  </div>
                  <div className="absolute bottom-3 flex justify-center w-full">
                    <Link href="/ViewProduct">
                      <Button text={'Select options'} className='transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 group-hover:scale-110' />
                    </Link>
                  </div>
                </div>

                <div className='relative flex flex-col mx-10 overflow-hidden pb-8'>
                  <div className='absolute pt-0 text-lg font-inter'>{room.roomname}</div>
                  <div className='text-lg mt-5'></div>
                  <div className=' block b-0 py-2 font-inter pt-5'>₹{room.price}</div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div >
    </>
  )
}

export default New_Summer
// 'use client';
// import Product from '@/component/Products'
// import React from 'react'
// import Img1 from '@/Img/images/Images/room/b2.jpg'
// import Img2 from '@/Img/images/Images/room/bee6.jpg'
// import Img3 from '@/Img/images/Images/room/bv1.jpg'
// import Img4 from '@/Img/images/Images/room/farm1.jpg'
// import Img5 from '@/Img/images/Images/room/glass4.jpg'
// import Img6 from '@/Img/images/Images/room/gio1.jpg'
// import Img7 from '@/Img/images/Images/room/mud1.jpg'
// import Img8 from '@/Img/images/Images/room/nest1.jpg'
// import Img9 from '@/Img/images/Images/room/hc1.jpg'
// import { Span } from 'next/dist/trace'
// import { StaticImport } from 'next/dist/shared/lib/get-img-props'


// interface Product {
//   id: number;
//   src: string | StaticImport;
//   alt: string;
//   name: string;
//   price: number;
//   review: string;
//   real_price: number;
//   rating: string;
// }
// const products: Product[] = [
//   {
//     id: 1,
//     src: Img1,
//     alt: 'Barrel Room',
//     name: 'Barrel Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 2,
//     src: Img2,
//     alt: 'Bee Hive',
//     name: 'Bee Hive',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 3,
//     src: Img3,
//     alt: 'BougainVillea Cabins',
//     name: 'BougainVillea Cabins',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 4,
//     src: Img4,
//     alt: 'Farmers Room',
//     name: 'Farmers Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 5,
//     src: Img5,
//     alt: 'Glass Room',
//     name: 'Glass Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 6,
//     src: Img6,
//     alt: 'Geo Desic',
//     name: 'Geo Desic',
//     price: 9000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 7,
//     src: Img7,
//     alt: 'Mud Rooms',
//     name: 'Mud Rooms',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 8,
//     src: Img8,
//     alt: 'Birds Nest',
//     name: 'Birds Nest',
//     price: 8000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
//   {
//     id: 9,
//     src: Img9,
//     alt: 'Historic Room',
//     name: 'Historic Room',
//     price: 7000,
//     review: '',
//     real_price:9000,
//     rating: '',
//   },
// ];

// type Props = {} & React.HTMLAttributes<HTMLElement>;

// const New_Summer = ({ className, children, ...props }: Props) => {
//   return (
//     <>
//       <div className='md:mx-20 mx-5'>

//         <div className={`snap-mandatory snap-x wrapper flex  overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}`}>
//         {products.map((product) => (
//             <Product
//               src={product.src}
//               alt={product.alt}
//               name={product.name}
//               bg={'snap-center sm:snap-start m-5 w-[270px] h-[250px] md:w-96 md:h-72'}
//               className=''
//               priceCss='mt-10'
//               price={product.price} review={product.review} real_price={product.real_price} rating={product.rating} />
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default New_Summer