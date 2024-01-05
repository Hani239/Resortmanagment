import Baby_image2 from '@/component/Insta_Comp'
import React from 'react'
import Image from 'next/image'
import pic1 from '@/Img/ImgC/baby_1.jpg'
import pic2 from '@/Img/ImgC/Children.jpg'
import pic3 from '@/Img/ImgC/children_3.jpg'
import pic4 from '@/Img/ImgC/Child.jpg'

type Props = {}

const Baby_Image3 = (props: Props) => {
    return (

            <div className='flex flex-wrap justify-center relative gap-7'>
                <Baby_image2
                    src={pic1} alt={'baby1'} />
                <Baby_image2
                    src={pic2} alt={'baby2'} />
                <Baby_image2
                    src={pic3} alt={'baby3'} />
                <Baby_image2
                    src={pic4} alt={'baby4'} />
            </div>
    
    )
}

export default Baby_Image3