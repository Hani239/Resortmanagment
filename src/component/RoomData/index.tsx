'use client';
import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import React, { useState, FC, ChangeEvent, FormEvent } from 'react'

import Sidebar from "@/component/Sidebar/page"




type Props = {};

const RoomData = (props: Props) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [roomname, setRoomname] = useState('');
  const [discription, setDiscription] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [image, setImage] = useState('');

  const postDetails = () =>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","resort-img")
    data.append("cloud_name","ds8pe3hke")
    fetch("https://api.cloudinary.com/v1_1/ds8pe3hke/image/upload" , {
        method
    })
  }

   const router = useRouter();
   const [error, setError] = useState(false);


//   const handleSignup = async () => {
//     if (password !== c_password) {
//       setPasswordError(true)
//       return false
//     }
//     else {
//       setPasswordError(false)
//     }
//     if (!email || !password || !c_password || !username || !address || !phone) {
//       setError(true)
//       return false
//     }
//     else {
//       setError(false)
//     }

//     const teamData = {
//       username,
//       password,
//       email,
//       address,
//       phone
//     };

//     try {
//       const response = await fetch(`${API_BASE_URL}/user/createuser`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(teamData),
//       });

//       if (!response.ok) {
//         const message = await response.text();
//         throw new Error("Request failed: " + message);
//       }

//       const data = await response.json();
//       alert("Registered Successfully")
//       router.push("/")
//       console.log("Registered Successfully", data);
//     } catch (error) {
//       alert("Registration Fail")
//       console.error("Registration Fail", error);
//     }
 
    return (
        <div className="w-full h-full">
        <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
            <Sidebar></Sidebar>
        </div>
        <div className="inline-block w-3/4">
        <div className="px-20">
        <form >
           
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">        
                 ADD
            </button>
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
                UPDATE
            </button>
           <br />
       
         <br /><br />
         Id:<br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Id" value={roomname} onChange={(event) => setRoomname(event.target.value)} ></input><br></br>
         Name:<br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Name" value={roomname} onChange={(event) => setDiscription(event.target.value)}></input>
         {
              error && !roomname && <span className='input-error'>Please enter valid name</span>
        }
         Discription:<br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Discription" value={discription} onChange={(event) => setPrice(event.target.value)}></input><br></br>
         {
              error && !discription && <span className='input-error'>Please enter valid Discription</span>
         }
         Price:<br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Amount" value={price} onChange={(event) => setPrice(event.target.value)}></input>
         {
              error && !price && <span className='input-error'>Please enter valid Price</span>
         }
         Capacity:<br />
         <input className="border-2 p-2 w-full " type="text" placeholder="Capacity" value={capacity} onChange={(event) => setCapacity(event.target.value)}></input>
         {
              error && !capacity && <span className='input-error'>Please enter valid Capacity</span>
         } 
         <br />
         <div className="file-field input-field">
          <div className="btn #64b5f6 blue">
            <span>Upload Image</span>
            <input type="file" value={image} onChange= {(event) => setImage(event.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
                <input className= "file-path validate" type="text" />
          </div>
         </div>
         <br></br> 

       </form>
       <div className=" border-2">
            <div>
                <Link href={"/editTopic/123"} className="float-right"><HiPencilAlt /></Link>
                <CgRemove/>

                <h3 className="text-xl m-2">A Shape Room</h3>
                <div className="text-l m-2">Includes Little Kitchen , Garden View , Sofas Etc</div>
                <div className="text-l m-2">4000</div>
                <div className="text-l m-2">3</div>
            </div>
        </div>
        </div>
       </div>
       </div>
    );
}
export default RoomData;