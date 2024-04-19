"use client";

import Link from "next/link";
import { FcAddColumn } from "react-icons/fc";
import { CgRemove } from "react-icons/cg";
import { HiPencilAlt, HiUserRemove } from "react-icons/hi";
import { useRouter } from "next/navigation";
import React, { useState, FC, ChangeEvent, FormEvent } from "react";
import Sidebar from "@/component/Sidebar/page";

const RoomData = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [roomname, setRoomname] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [image, setImage] = useState(null);

  const postDetails = () => {
    const data = new FormData();
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }
    data.append("file", image);
    data.append("upload_preset", "resort-image");
    data.append("cloud_name", "resortcloud");
    fetch("https://api.cloudinary.com/v1_1/resortcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
        <Sidebar></Sidebar>
      </div>
      <div className="inline-block w-3/4">
        <div className="px-20">
          <form>
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
              ADD
            </button>
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg">
              UPDATE
            </button>
            <br />
            <br />
            <br />
            {/* Id:<br />
               <input className="border-2 p-2 w-full " type="text" placeholder="Id" value={""} onChange={(event) => setRoomname(event.target.value)} ></input><br></br>
                */}
            Name:
            <br />
            <input
              className="border-2 p-2 w-full "
              type="text"
              placeholder="Name"
              value={roomname}
              onChange={(e) => setRoomname(e.target.value)}
            ></input>
            {error && !roomname && (
              <span className="input-error">Please enter valid name</span>
            )}
            Discription:
            <br />
            <input
              className="border-2 p-2 w-full "
              type="text"
              placeholder="Discription"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></input>
            <br></br>
            {error && !discription && (
              <span className="input-error">
                Please enter valid Discription
              </span>
            )}
            Price:
            <br />
            <input
              className="border-2 p-2 w-full "
              type="text"
              placeholder="Amount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
            {error && !price && (
              <span className="input-error">Please enter valid Price</span>
            )}
            Capacity:
            <br />
            <input
              className="border-2 p-2 w-full "
              type="text"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            ></input>
            {error && !capacity && (
              <span className="input-error">Please enter valid Capacity</span>
            )}
            <br />
            <div className="file-field input-field">
              <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
            <button
              className="btn waves-effect waves-light #64b5f6 blue darken-1"
              onClick={() => postDetails()}
            >
              Submit Post
            </button>
            <br></br>
          </form>
          <div className=" border-2">
            <div>
              <Link href={"/editTopic/123"} className="float-right">
                <HiPencilAlt />
              </Link>
              <CgRemove />

              <h3 className="text-xl m-2">A Shape Room</h3>
              <div className="text-l m-2">
                Includes Little Kitchen , Garden View , Sofas Etc
              </div>
              <div className="text-l m-2">4000</div>
              <div className="text-l m-2">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
