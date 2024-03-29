import React, { useState, useEffect } from 'react';
import { getAllPublicRoomsData } from '../../../backend/Rooms/allPublicRooms';
import RoomOptions from './components/section1';
import SignedHeader from './components/header';
import getJoinedRooms from '../../../backend/Rooms/joinedRooms';
import { autho } from '../../../backend/firebase';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/components/Footer';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(()=>{ 

  if(!autho.currentUser){
    navigate("/Login")
  }
})
  const [publicRooms, setPublicRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const retrievedRooms = await getAllPublicRoomsData();
      setPublicRooms(retrievedRooms);
      
      try {
        const joinedRoomsData = await getJoinedRooms(); // Wait for the joined rooms data
        setJoinedRooms(joinedRoomsData);
      } catch (error) {
        console.error('Error fetching joined rooms:', error);
      }
    };

    fetchData();
  

  }, [navigate]);

  return (
    <div className="dashboard">


        <SignedHeader />
        <RoomOptions rooms={publicRooms} joinedRooms={joinedRooms} />
        <Footer />
     

    </div>
  );
}

export default Dashboard;
