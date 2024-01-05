import Image from 'next/image'
import Nav from '@/component/Nav_Exp'
import Footer from '@/container/Footer'
import View from '@/component/ProductView'
export default function Home() {
  return (
    <main className=''>
      <div className="relative flex z-20">
        <Nav></Nav>
      </div>
    
      <div>
        <View/>
      </div>
      
       <div>
        <Footer />
       </div>
       
    </main>
  )
}