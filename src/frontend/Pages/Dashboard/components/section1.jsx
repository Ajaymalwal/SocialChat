import React, { useState,useEffect } from 'react';
import "../../../Styles/Dashboard/section1.css";
import { useNavigate } from 'react-router-dom';
import updateMemberCount from '../../../../backend/Rooms/UpdateMember';
import RoomImage from "../../../Images/user/room-bg.avif"
import { joinRoom } from '../../../../backend/Rooms/joinRoom';
import getJoinedRooms from '../../../../backend/Rooms/joinedRooms';
import { getAllPublicRoomsData } from '../../../../backend/Rooms/allPublicRooms';

function RoomOptions() {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState('public');
  const [underlinePosition, setUnderlinePosition] = useState('public');
  const [publicRooms, setPublicRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);

 

  const fetchData = async (roomName) => {
    try {
      if (roomName === 'explore') {
        const retrievedRooms = await getAllPublicRoomsData();
        setPublicRooms(retrievedRooms);
      } else {
        const joinedRoomsData = await getJoinedRooms();
        setJoinedRooms(joinedRoomsData);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchData('public'); // Fetch data when component mounts
  },[]); // Fetch data whenever selectedRoom changes
 

  const handleClick =async (roomName) => {
  
    setSelectedRoom(roomName);
    setUnderlinePosition(roomName); 
  await  fetchData(roomName);
    
  };
  const renderJoinButton = (roomId) => {
    const isJoined = joinedRooms.some(room => room.id === roomId);
    return isJoined ? 'Joined' : 'Join';
  };

  return (
    <div className="rooms">
      <div className="room-tabs">
        <button
          className={`room-tab `}
          onClick={() => handleClick('public')}
        >
          Public Rooms
        </button>
        <button
          className={`room-tab`}
          onClick={() => handleClick('private')}
        >
          Private Rooms
        </button>
        <button
          className={`room-tab`}
          onClick={() => handleClick('explore')}
        >
          Explore Rooms
        </button>
      </div>
      <div className="underline" style={{ left: `${underlinePosition === 'public' ? '12.6%' : underlinePosition === 'private' ? '46%' : "80%"}` }}>      </div>

      <div className="horiline"></div>
      <div className="allrooms">
      {selectedRoom === 'public' && joinedRooms && joinedRooms.length > 0 && (
          
          joinedRooms.map((room,index)=>
            <>
          <div className="roomcontainer" key={index} onClick={()=>{ navigate("/Inbox",{ state: {roomId:  room.id } })}}>
          <div className="roomimage" ><img src={RoomImage} alt="" /></div>
            <div className="roomdisc" >
              <h3>{room.RoomName}</h3>
              <div className='explore-room-join'>
              <p className='members'>{room.memberCount} Members</p></div>
              <p>{room.RoomDisc}</p>
            </div>
          </div>
        
          
          </>
          )
        )}
        {selectedRoom === 'private' && (
            <>
          <div className='no-room-joined'>
           
           <h2>Coming Soon</h2>
           <p onClick={()=>{
            handleClick('explore')
           }} style={{color:"blue", textDecoration:"underline"}}>Explore rooms</p>
          </div>
        
          </>
        )}
         {selectedRoom === 'explore' && publicRooms && publicRooms.length > 0 && (
          
          publicRooms.map((room)=>
            <>
          <div className="roomcontainer" key={room.id}>
          <div className="roomimage" ><img src={RoomImage} alt="" /></div>
            <div className="roomdisc" >
              <h3>{room.RoomName}</h3>
              <div className='explore-room-join'>
              <p className='members'>{room.memberCount} Members</p> <p className='join-button' onClick={()=>{joinRoom(room.id); updateMemberCount(room.id,1)}}>{renderJoinButton(room.id)}</p></div>
              <p>{room.RoomDisc}</p>
            </div>
          </div>
        
          
          </>
          )
        )}
      </div>
    </div>
  );
}


export default RoomOptions;
