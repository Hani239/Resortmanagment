"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';         // Assuming you might need this for routing
import Sidebar from "@/component/Sidebar/page"; // Ensure this path is correct
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
  const [error, setError] = useState('');
  const [rooms, setRooms] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/user/rooms`);
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
    return () => { // Cleanup function to prevent setting state on unmounted component
      setIsLoading(false); // Just a safety measure to mimic cleanup
    };
  }, [API_BASE_URL]);

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

    setUploading(true);
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
        setUploading(false);
      });
  };

  const createRoom = (imageUrl) => {
    const roomData = {
      roomname,
      description,
      price: Number(price),
      capacity: Number(capacity),
      imageUrl
    };

    fetch(`${API_BASE_URL}/user/createroom`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(roomData)
    })
      .then(response => response.json())
      .then(data => {
        alert('Room created successfully!');
        setRoomname('');
        setDescription('');
        setPrice('');
        setCapacity('');
        setImage(null);
        setRooms(prevRooms => [...prevRooms, data]); // Update the room list
      })
      .catch(error => {
        console.error('Error creating room:', error);
        alert('Failed to create room.');
      })
      .finally(() => setUploading(false));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            <input className="border-2 p-2 w-full " type="text" placeholder="Name" value={roomname} onChange={e => setRoomname(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
            <input className="border-2 p-2 w-full " type="text" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} />
            <div className="file-field input-field">
              <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" onChange={handleImageChange} />
              </div>
            </div>
            <button className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails} disabled={uploading}>
              Submit Post
            </button>
          </form>
          
         
          <br /><br /><br />
           {rooms.map(room => (
           <div className=" border-2 w-full h-full p-5">
            <div>
               <button className="float-right"><HiPencilAlt /></button>
                <CgRemove/>
              <div className="w-1/4 inline-block">
              <img src={room.imageUrl} alt={room.roomname} className="w-full h-full"  />
              </div>
              <div className="w-3/4 inline-block pl-5">
                <h3 className="text-xl m-2">{room.roomname}</h3>
                <div className="text-l m-2">Price: ${room.price}</div>
                <div className="text-l m-2">Capacity: {room.capacity} Persons</div>
                <div className="text-l m-2">{room.description}</div>
                </div>
            </div>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default RoomData;
// "use client";
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; // Assuming you might need this for routing
// import Sidebar from "@/component/Sidebar/page"; // Ensure this path is correct
// import { HiPencilAlt } from "react-icons/hi";
// import { CgRemove } from "react-icons/cg";

// const RoomData = () => {
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//   const [roomname, setRoomname] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState('');
//   const [rooms, setRooms] = useState([]); 
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/user/rooms`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchRooms();
//     return () => { // Cleanup function to prevent setting state on unmounted component
//       setIsLoading(false); // Just a safety measure to mimic cleanup
//     };
//   }, [API_BASE_URL]);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     } else {
//       console.error("No files selected");
//       alert("No file selected.");
//     }
//   };

//   const postDetails = () => {
//     if (!roomname || !description || !price || !capacity || !image) {
//       alert("All fields must be filled, and an image must be selected.");
//       return;
//     }

//     setUploading(true);
//     const data = new FormData();
//     data.append("file", image);
//     data.append("upload_preset", "resort-image");
//     data.append("cloud_name", "resortcloud");

//     fetch("https://api.cloudinary.com/v1_1/resortcloud/image/upload", {
//       method: "post",
//       body: data,
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.secure_url) {
//           createRoom(data.secure_url);
//         } else {
//           throw new Error('Image upload failed');
//         }
//       })
//       .catch(err => {
//         console.error("Error uploading image:", err);
//         alert("Failed to upload image.");
//         setUploading(false);
//       });
//   };

//   const createRoom = (imageUrl) => {
//     const roomData = {
//       roomname,
//       description,
//       price: Number(price),
//       capacity: Number(capacity),
//       imageUrl
//     };

//     fetch(`${API_BASE_URL}/user/createroom`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(roomData)
//     })
//       .then(response => response.json())
//       .then(data => {
//         alert('Room created successfully!');
//         setRoomname('');
//         setDescription('');
//         setPrice('');
//         setCapacity('');
//         setImage(null);
//         setRooms(prevRooms => [...prevRooms, data]); // Update the room list
//       })
//       .catch(error => {
//         console.error('Error creating room:', error);
//         alert('Failed to create room.');
//       })
//       .finally(() => setUploading(false));
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="w-full h-full">
//       <div className="w-full md:w-1/4 h-full float-start inline-block p-5">
//         <Sidebar />
//       </div>
//       <div className="inline-block w-3/4">
//         <div className="px-20">
//           <form onSubmit={e => e.preventDefault()}>
//             <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails}>
//               ADD
//             </button>
//             <button type="button" className="p-3 bg-red-500 float-right text-white mr-2 rounded-lg" onClick={postDetails}>
//               UPDATE
//             </button>
//             <input className="border-2 p-2 w-full " type="text" placeholder="Name" value={roomname} onChange={e => setRoomname(e.target.value)} />
//             <input className="border-2 p-2 w-full " type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
//             <input className="border-2 p-2 w-full " type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
//             <input className="border-2 p-2 w-full " type="text" placeholder="Capacity" value={capacity} onChange={e => setCapacity(e.target.value)} />
//             <div className="file-field input-field">
//               <div className="btn #64b5f6 blue darken-1">
//                 <span>Upload Image</span>
//                 <input type="file" onChange={handleImageChange} />
//               </div>
//             </div>
//             <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={postDetails} disabled={uploading}>
//               Submit Post
//             </button>
//           </form>
//           <h1>Rooms</h1>
//           <ul>
//             {rooms.map(room => (
//               <li key={room._id}>
//                 <h2>{room.roomname}</h2>
//                 <p>{room._id}</p>
//                 <p>{room.description}</p>
//                 <p>Price: ₹{room.price}</p>
//                 <p>Capacity: {room.capacity}</p>
//                 <img src={room.imageUrl} alt={room.roomname} style={{ width: "100px" }} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomData;
