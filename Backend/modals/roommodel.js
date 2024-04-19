const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomname: { 
    type: String, 
    required: true, 
    unique: true 
  },
  description: { 
    type: String, 
    required: true
  },
  price: { 
    type: Number, 
    required: true 
  },
  capacity: { 
    type: Number, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  }
}, {
  timestamps: true
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;