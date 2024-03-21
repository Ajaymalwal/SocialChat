import React, { useState, useEffect } from 'react';
import { getAllPublicRoomsData } from '../../../backend/Rooms/allPublicRooms';
import RoomOptions from './components/section1';
import SignedHeader from './components/header';
import getJoinedRooms from '../../../backend/Rooms/joinedRooms';
import { useNavigate } from 'react-router-dom';
import { autho } from '../../../backend/firebase';

function Dashboard() {
  const [publicRooms, setPublicRooms] = useState([]);
  const [joinedRooms, setJoinedRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const retrievedRooms = await getAllPublicRoomsData();
      setPublicRooms(retrievedRooms);
      
      try {
        const joinedRoomsData = await getJoinedRooms(); // Wait for the joined rooms data
        setJoinedRooms(joinedRoomsData);
      } catch (error) {
        console.error('Error fetching joined rooms:', error);
        navigate('/Login'); // Redirect to login page
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="dashboard">
      <SignedHeader />
      <RoomOptions rooms={publicRooms} joinedRooms={joinedRooms} />
    </div>
  );
}

export default Dashboard;
