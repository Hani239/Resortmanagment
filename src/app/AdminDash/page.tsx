import Link from "next/link";
import Dashboard from  "@/component/Dashboard/page";
import { HiPencilAlt } from "react-icons/hi";
import Nav from "@/component/Nav_Exp";


export default function Emply(){
    return (
        <div className="mt-0">
            <Nav></Nav>
            <div className="pt-20">
            <Dashboard></Dashboard>
            </div>
    
       </div>
    );
}