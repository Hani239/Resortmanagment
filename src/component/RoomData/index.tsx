"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from "@/component/Sidebar/page";
import { HiPencilAlt } from "react-icons/hi";
import { CgRemove } from "react-icons/cg";

const RoomData = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [roomname, setRoomname] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      console.error("No files selected");
      alert("No file selected.");
    }
  };

  const postDetails = () => {
    if (!roomname || !description || !price || !capacity || !image) {
      alert("All fields must be filled, and an image must be selected.");
      return;
    }

    setUploading(true); // Indicate upload is in progress
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "resort-image");
    data.append("cloud_name", "resortcloud");

    fetch("https://api.cloudinary.com/v1_1/resortcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        if (data.secure_url) {
          createRoom(data.secure_url);
        } else {
          throw new Error('Image upload failed');
        }
      })
      .catch(err => {
        console.error("Error uploading image:", err);
        alert("Failed to upload image.");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const createRoom = (imageUrl) => {
    const roomData = {
      roomname,
      description,
      price: Number(price), // Convert to number to ensure proper data type
      capacity: Number(capacity), // Convert to number to ensure proper data type
      imageUrl
    };

    fetch(`${API_BASE_URL}/user/createroom`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(roomData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Room created:', data);
      alert('Room created successfully!');
      setRoomname('');
      setDescription('');
      setPrice('');
      setCapacity('');
      setImage(null);
    })
    .catch(error => {
      console.error('Error creating room:', error);
      alert('Failed to create room.');
    });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
        <Sidebar />
      </div>
      <div className="inline-block w-3/4">
        <div className="px-20">
          <form onSubmit={e => e.preventDefault()}>
            <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails}>
              ADD
            </button>
            <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails}>
              UPDATE
            </button>
            <input className="border-2 p-2 w-full " type="text" placeholder="Name" value={roomname} onChange={(e) => setRoomname(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            <div className="file-field input-field">
              <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={postDetails} disabled={uploading}>
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
