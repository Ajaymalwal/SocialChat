import "../../../Styles/Dashboard/header.css";
import Logo from "../../../Images/logo/logo.png";
import UserIcon from "../../../Images/user/user-icon.jpeg";
import { Link } from "react-router-dom";
import React, {useState,useEffect,useRef} from "react";
import "../../dropdown/Dropdown.css"
import ConfirmationBox from "../../Components/confirmBox";
import { autho } from "../../../../backend/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function SignedHeader(){
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsConfirmationOpen(true);
      };
    
      const handleConfirmLogout = async() => {
        await signOut(autho).then(()=>{
          alert('You have been signed out!');
        setIsConfirmationOpen(false);
         navigate("/Login")
        }).catch((Error)=>{
          console.log("Error in sign out. Error: ",Error)
        });
        
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
  

    return(
        <>
        <div className="header-container">
            <div className="header">
                <div className="Logo"><img src={Logo} alt="Social chat Logo" /></div>
                <div className="header-element-container ">
                    <div className="header-element"><Link to='/Dashboard' style={{textDecoration:'none',color:'black'}}><p>Profile</p></Link> </div>
                    <Link to="/CreateRoom" className="header-element bg-button"  ><p>New Room</p></Link>
                    <div className="popup-menu-container" ref={menuRef}>
                    <div className="user-icon"  onClick={toggleMenu}><img src={UserIcon} alt="User icon" /></div>
                    {isOpen && (
                        <>
                       <div className="popup-menu">
                           <ul>
                                <li onClick={handleLogout}>Sign Out</li>
                          </ul>
                       </div>
                        <ConfirmationBox
                        isOpen={isConfirmationOpen}
                        message="Are you sure you want to sign out?"
                        onConfirm={handleConfirmLogout}
                        onCancel={handleCancelLogout}
                      />
                      </>
                     )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignedHeader;