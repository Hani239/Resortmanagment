import Link from "next/link";
import Nav from "@/component/Nav_Exp";
import RoomData from "@/component/RoomData/index"
import { HiPencilAlt } from "react-icons/hi";


export default function Roomie(){
    return (
        <>
        <Nav></Nav>
        <div className="pt-40">
            <RoomData></RoomData>
       </div>
        </>
    );
}