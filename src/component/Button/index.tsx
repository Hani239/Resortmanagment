import React from "react";
import clsx from 'clsx';
import Image from 'next/image'

type Props={text:String } & React.HTMLAttributes<HTMLElement>;
const Button =({ className, text, ...props }: Props) => {
    return( 
       <>
          <button className={`w-auto h-auto bg-[#E46A4B] font-inter-100 font-semibold text-xs p-4 text-white align-middle border border-dashed border-white rounded-lg ${className}`} >
          {/*  */}
             {text}
            </ button>
       </>
    );
};
export default Button;