import "../../Styles/Inbox/inbox.css";
import usericon from "../../Images/user/user-icon.jpeg";
import sendicon from "../../Images/inbox/paper-plane.png";
import Header from "../Dashboard/components/header";
import Footer from "../Home/components/Footer";
import backicon from "../../Images/inbox/left-icon.webp";
import { Link, useLocation,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {  PushMessage, GetRoomMembers } from "../../../backend/Message/RoomMessages";
import UseMessages from "../../../backend/Message/GetMessages";
import { autho } from "../../../backend/firebase";
import PopupMenu from "../dropdown/Dropdown";


function CurrentTime() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const time = currentDate.toLocaleTimeString();
    const formattedString = `${date} ${month} ${time}`;
  
    return formattedString;
  }
   
function Inbox() {
  const navigate = useNavigate();
  const location = useLocation();
   
    const  roomId  = location.state.roomId;
    const roomName = location.state.RoomName;
    const roomMeberCount = location.state.RoomMemberCount;
    const retrievedMessages = UseMessages(roomId);
    

    const [roomMessages, setRoomMessages] = useState([]);
    const [roomMembers, setRoomMembers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
    
      if (retrievedMessages) {
        console.log("in inbox: ",roomMessages)
        setRoomMessages(retrievedMessages); // Set state with retrieved messages
      }
    }, [retrievedMessages]);
  
    useEffect(() => {
      if (!roomId){
        navigate("/Dashboard")
       return; 
      }
       console.log(roomId)
   
      const fetchroomData = async()=>{
        try{
            
          const retrievedMembers = await GetRoomMembers(roomId);
          setRoomMembers(retrievedMembers);
          console.log("retrivedMembers: ",retrievedMembers)
          console.log("RoomMembers: ",roomMembers)

        }
        catch(error){
            console.error("error fetching room data : ",error)
        }
      }
  
  
      fetchroomData();
  
    }, [roomId]);

    const sendMessage =async (e) => {
      e.preventDefault();
      if (!message) return;
  
      const newMessage = {
        text: message,
        sender: autho.currentUser.displayName,
        timestamp: CurrentTime(),
        senderUid: autho.currentUser.uid,
      };
  
    await  PushMessage(newMessage, roomId);
      setMessage('');
    };

    
    return (
        <>
            <Header />
            <div className="chatpage-contaienr">
                <div className="chatpage">
                    <div className="inbox-sidebar">
                        <Link to="/Dashboard">
                            {" "}
                            <img src={backicon} alt="" className="backbutton" />{" "}
                        </Link>
                        <div className="sidebar-heading">
                            <h2>Members</h2>
                        </div>
                        <div className="room-members-container">
                        {roomMembers && roomMembers.length > 0 ? ( 
                          roomMembers.map((member,index) => (
                                <div className="member-container" key={index}>
                                    <div className="usericon-container">
                                        <img src={usericon} alt="" />
                                    </div>
                                    <div className="member-info">
                                        <p>{member.name}</p>
                                        <p>{member.UserCity}</p>
                                    </div>
                                </div>
                            ))
                            ) : (
                                <div className="room-members-container">Loading members...</div>
                            )}
                            
                        </div>
                    </div>
                    <div className="inbox-main">
                        <div className="chat-page-header">
                            <div className="member-container">
                                <div className="roomicon-container">
                                    <img src={usericon} alt="" />
                                </div>
                                <div className="room-info">
                                    <p>{roomName}</p>
                                    <p>{roomMeberCount} Members</p>
                                </div>
                            </div>
                            <div className="three-dot-container">
                                  <PopupMenu roomId={roomId}/>
                                </div>
                        </div>



                   <div className="chat-page-container">
                    <div className="chat-page-main"> 
                   {roomMessages && roomMessages.length > 0 ? (
  roomMessages.map((message, index) => (
    <div className={`message ${message.senderUid === autho.currentUser.uid ? 'sent' : 'received'}`} key={index}>
      <img src={usericon} alt="" />
      <div className="message-block">
        <span className="message-first-sent">
          <p className="username">{message.sender}</p>
        </span>
        <p className={`msg-text ${message.senderUid === autho.currentUser.uid ? 'sent-text' : 'received-text'}`}>{message.text}</p>
        <p className="time">{message.timestamp}</p>
      </div>
    </div>
  ))
) : (
  <div className="message">No Message in this room.   Start Messaging </div>
)}

                          
                        </div>
                        </div>
                 
                   
                    <div className="chat-page-footer">
                        <form id="msgform" onSubmit={sendMessage}>
                            <input
                                className="input-message"
                                name="message"
                                placeholder="write your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></input>
                            <button type="submit" className="send-message">
                                <img src={sendicon} alt="send icon and send button" />
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Inbox;
