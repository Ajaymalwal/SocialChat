import { useState, useEffect, useRef } from 'react';
import { database } from '../firebase';
import { get, onChildAdded, ref } from 'firebase/database';

function UseMessages(roomId) {
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(ref(database, `Rooms/public/${roomId}/messages`)).current;

  useEffect(() => {
    const initialLoad = async () => {
      try {
        const snapshot = await get(messagesRef);
        const data = snapshot.val() || [];
        if (data) {
          const receivedMessages = Object.values(data);
          const accumulatedMessages = receivedMessages.map(e => e.messagefile);
          setMessages(accumulatedMessages);
        }
      } catch (error) {
        console.error("Error fetching initial messages:", error);
      }
    };

    const handleChildAdded = (snapshot) => {
      const newData = snapshot.val();
      const newMessage = newData.messagefile;
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    initialLoad();

    const messageListener = onChildAdded(messagesRef, handleChildAdded);

    // Cleanup function
    return () => {
      messageListener(); // Unsubscribe from listener
    };
  }, [roomId, messagesRef]); // Dependency array without messages and accumlatedMessages

  return messages;
}

export default UseMessages;
