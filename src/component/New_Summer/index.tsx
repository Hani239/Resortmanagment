'use client';
import Product from '@/component/Products'
import React from 'react'
import Img1 from '@/Img/images/Images/room/b2.jpg'
import Img2 from '@/Img/images/Images/room/bee6.jpg'
import Img3 from '@/Img/images/Images/room/bv1.jpg'
import Img4 from '@/Img/images/Images/room/farm1.jpg'
import Img5 from '@/Img/images/Images/room/glass4.jpg'
import Img6 from '@/Img/images/Images/room/gio1.jpg'
import Img7 from '@/Img/images/Images/room/mud1.jpg'
import Img8 from '@/Img/images/Images/room/nest1.jpg'
import Img9 from '@/Img/images/Images/room/hc1.jpg'
import { Span } from 'next/dist/trace'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


interface Product {
  id: number;
  src: string | StaticImport;
  alt: string;
  name: string;
  price: number;
  review: string;
  real_price: number;
  rating: string;
}
const products: Product[] = [
  {
    id: 1,
    src: Img1,
    alt: 'Barrel Room',
    name: 'Barrel Room',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 2,
    src: Img2,
    alt: 'Bee Hive',
    name: 'Bee Hive',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 3,
    src: Img3,
    alt: 'BougainVillea Cabins',
    name: 'BougainVillea Cabins',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 4,
    src: Img4,
    alt: 'Farmers Room',
    name: 'Farmers Room',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 5,
    src: Img5,
    alt: 'Glass Room',
    name: 'Glass Room',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 6,
    src: Img6,
    alt: 'Geo Desic',
    name: 'Geo Desic',
    price: 9000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 7,
    src: Img7,
    alt: 'Mud Rooms',
    name: 'Mud Rooms',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 8,
    src: Img8,
    alt: 'Birds Nest',
    name: 'Birds Nest',
    price: 8000,
    review: '',
    real_price:9000,
    rating: '',
  },
  {
    id: 9,
    src: Img9,
    alt: 'Historic Room',
    name: 'Historic Room',
    price: 7000,
    review: '',
    real_price:9000,
    rating: '',
  },
];

type Props = {} & React.HTMLAttributes<HTMLElement>;

const New_Summer = ({ className, children, ...props }: Props) => {
  return (
    <>
      <div className='md:mx-20 mx-5'>

        <div className={`snap-mandatory snap-x wrapper flex  overflow-x-auto scrollbar-thin scrollbar-thumb-[#E8EEEF] ${className}`}>
        {products.map((product) => (
            <Product
              src={product.src}
              alt={product.alt}
              name={product.name}
              bg={'snap-center sm:snap-start m-5 w-[270px] h-[250px] md:w-96 md:h-72'}
              className=''
              priceCss='mt-10'
              price={product.price} review={product.review} real_price={product.real_price} rating={product.rating} />
          ))}
        </div>
      </div>
    </>
  )
}

export default New_Summer