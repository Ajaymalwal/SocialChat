import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.css'; // Import your CSS file
import ConfirmationBox from '../Components/confirmBox';
import RemoveMember from '../../../backend/RemoveMember/removemember';

const PopupMenu = ({roomId}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();
   const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
   const handleLogout = () => {
       setIsConfirmationOpen(true);
     };
   
     const handleConfirmLogout = async() => {
    await  RemoveMember(roomId); 
       setIsConfirmationOpen(false);
       navigate("/Dashboard")
     };
   
     const handleCancelLogout = () => {
       setIsConfirmationOpen(false);
     };
   

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <div className="popup-menu-container" ref={menuRef}>
      <div className="popup-menu-trigger" onClick={toggleMenu}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {isOpen && (
         <>
        <div className="popup-menu">
          <ul>
           <li onClick={handleLogout}>Leave Room</li>
          </ul>
        </div>
         <ConfirmationBox
         isOpen={isConfirmationOpen}
         message="Are you sure you want to Leave the Room?"
         onConfirm={handleConfirmLogout}
         onCancel={handleCancelLogout}
       />
       </>
      )}
    </div>
  );
};

export default PopupMenu;
