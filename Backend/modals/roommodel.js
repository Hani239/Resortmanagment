// const RoomSchema = new mongoose.Schema({
//   roomname: { type: String, required: true, unique: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true }
// });

// const Room = mongoose.model('Room', Room);


const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
}, {timestamps: true});

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;