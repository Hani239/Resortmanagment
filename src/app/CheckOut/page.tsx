import CheckOut from "@/container/CheckOut";
import Footer from "@/container/Footer";
import Nav from "@/component/Nav_Exp";

export default function Home() {
    return (
        <main className=''>
            <div className="relative flex z-10">
                <Nav></Nav>
            </div>
            <div>
                <CheckOut/>
            </div>
            <div className="relative">
                <Footer />
            </div>
        </main>
    )
}