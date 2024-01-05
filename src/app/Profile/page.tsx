import Footer from "@/container/Footer";
import Login from "@/component/Login";
import Nav from "@/component/Nav_Exp";

export default function Home() {
    return (
        <main className=''>
            <div className="relative flex z-10">
                <Nav></Nav>
            </div>
            <div>
                <Login/>
            </div>
            <div>
                <Footer />
            </div>
        </main>
    )
}