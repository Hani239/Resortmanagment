'use client';
import Product from '@/component/Products'
import React from 'react'
import Img1 from '@/Img/ImgC/1.png'
import Img2 from '@/Img/ImgC/2.png'
import Img3 from '@/Img/ImgC/3.png'
import Img4 from '@/Img/ImgC/4.png'
import Img5 from '@/Img/ImgC/5.png'
import Img6 from '@/Img/ImgC/6.png'
import Img7 from '@/Img/ImgC/7.png'
import Img8 from '@/Img/ImgC/8.png'
import Img9 from '@/Img/ImgC/9.png'
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
    alt: 'Giraffe Slub Knit T-Shirt',
    name: 'Giraffe Slub Knit T-Shirt',
    price: 11.99,
    review: '',
    real_price:14.33,
    rating: '',
  },
  {
    id: 2,
    src: Img2,
    alt: 'Rainbow soft toy',
    name: 'Rainbow soft toy',
    price: 19.99,
    review: '',
    real_price:21.99 ,
    rating: '',
  },
  {
    id: 3,
    src: Img3,
    alt: 'Dungarees With Pocket',
    name: 'Dungarees With Pocket',
    price: 16.99,
    review: '',
    real_price: 20.12,
    rating: '',
  },
  {
    id: 4,
    src: Img4,
    alt: 'Giraffe Slub Knit Trousers',
    name: 'Giraffe Slub Knit Trousers',
    price: 19.99,
    review: '',
    real_price:25.22,
    rating: '',
  },
  {
    id: 5,
    src: Img5,
    alt: 'Leopard T-Shirt',
    name: 'Leopard T-Shirt',
    price: 4.99,
    review: '',
    real_price: 9.99,
    rating: '',
  },
  {
    id: 6,
    src: Img6,
    alt: 'Griaffe Romper Suit',
    name: 'Griaffe Romper Suit',
    price: 15.99,
    review: '',
    real_price: 19.99,
    rating: '',
  },
  {
    id: 7,
    src: Img7,
    alt: 'Cotten pajamas,3 pieces',
    name: 'Cotten pajamas,3 pieces',
    price: 9.99,
    review: '',
    real_price:14.99,
    rating: '',
  },
  {
    id: 8,
    src: Img8,
    alt: 'Sweatshirt Kit + T-Shirt + Bermudi Pack',
    name: 'Sweatshirt Kit + T-Shirt + Bermudi Pack',
    price: 16.99,
    review: '',
    real_price:24.99 ,
    rating: '',
  },
  {
    id: 9,
    src: Img9,
    alt: 'Product9',
    name: 'Textured Dress with Fryed Details',
    price: 19.99,
    review: '',
    real_price: 29.99 ,
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
              bg={'bg-[#e3e3e3] snap-center sm:snap-start m-5 h-[300px] w-[250px] sm:h-[336px] sm:w-[280px] md:w-72 md:w-64'}
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