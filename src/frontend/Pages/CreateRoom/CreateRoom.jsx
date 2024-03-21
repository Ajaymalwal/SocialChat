import "../../Styles/CreateRoom/CreateRoom.css"
import SignedHeader from "../Dashboard/components/header";
import { useState } from "react";
import Footer from "../Home/components/Footer";
import getJoinedRooms from "../../../backend/Rooms/joinedRooms";
import RoomCreation from "../../../backend/RoomCreation/createroom";
import { autho } from "../../../backend/firebase";
import { useNavigate } from "react-router-dom";


function CreateRoom() {
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const navigate = useNavigate();

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleRoomDescriptionChange = (event) => {
    setRoomDescription(event.target.value);
  };

  const handleRoomSelect = (roomType) => {
    setSelectedRoomType(roomType);
  };

  getJoinedRooms()
  const handleCreateRoom = async () => {
    // Get room details from input fields or state
    const roomname = roomName
    const roomType = selectedRoomType
    const roomDisc = roomDescription
  
    try {
      await RoomCreation(roomname, roomType, roomDisc);
      console.log("Room created successfully.");
      
      navigate('/Dashboard')

    } catch (error) {
      console.error("Error creating room:", error);
    }
  };
  


  return (
    <>
      <SignedHeader />
      <div className="create-room-page">
        <div className="create-room-container">
          <div className="create-room-heading">
            <h2>Create a room</h2>
          </div>
          <div className="create-room-name">
            <input
              type="text"
              placeholder="Room Name"
              className="RoomName"
              id="RoomName"
              value={roomName}
              onChange={handleRoomNameChange}
            />
          </div>
          <div className="create-room-discription">
            <textarea
              type="text"
              name="Room-disc"
              id="Room-disc"
              placeholder="Room Discription"
              rows="10"
              cols="80"
              value={roomDescription}
              onChange={handleRoomDescriptionChange}
            />
          </div>
          <div className="create-room-buttons">
            <div className="room-options">
              <button
                className={`room-option ${
                  selectedRoomType === 'public' ? 'active' : ''
                }`}
                onClick={() => handleRoomSelect('public')}
                id="Public-option"
              >
                Public
              </button>
              <button
                className={`room-option ${
                  selectedRoomType === 'private' ? 'active' : ''
                }`}
                onClick={() => handleRoomSelect('private')}
                id="Private-option"
              >
                Private
              </button>
            </div>
            <div className="create-button-container">
              {/* Pass createRoom function as callback */}
              <input
                type="button"
                value="Create"
                className="bg-button create-button"
                onClick={handleCreateRoom}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreateRoom;
