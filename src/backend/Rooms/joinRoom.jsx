import { collection, doc, update, getDoc, setDoc,deleteDoc } from 'firebase/firestore';
import { firestoredb, autho, database } from '../firebase'; // Assuming firestoredb and autho are initialized
import { push, ref } from 'firebase/database';

async function joinRoom(roomId) {
  console.log("room id in the join room: ",roomId)
  const currentUser = autho.currentUser;
  let memberId = autho.currentUser.uid;
  let totalMembers = {
    memberId
  }

  const userRef = doc(firestoredb, 'users', currentUser.uid);
  const joinedRoomsRef = collection(userRef, 'joinedRooms');
  const roomRef = doc(joinedRoomsRef,  roomId);

  // Check if user is already joined (optional)
  const roomDocSnap = await getDoc(roomRef);
  if (roomDocSnap.exists()) {
    // User already joined this room, show alert
    alert('You have already joined this room.');
    return;
  }


  try{
    if (!currentUser) {
      throw new Error('User not signed in');
    }
    const roomMembersRef = ref(database,`Rooms/public/${roomId}/members`)
    await push(roomMembersRef,totalMembers)
    console.log("member succesfully added in the RTDB")
  }
  catch(error){
    console.log("Error in the adding members in the RTDB: ", error)
  }
  try {
    const currentUser = autho.currentUser;
    if (!currentUser) {
      throw new Error('User not signed in');
    }
   

  
    // Join the room (create an empty document)
    await setDoc(roomRef, {}, { merge: true }); // Set an empty document with merge to avoid overwriting data
    console.log('User joined room successfully.');
  } catch (error) {
    console.error('Error joining room:', error);
  }
}

async function leaveRoom(roomId) {
  try {
    const currentUser = autho.currentUser; // Get current user
    if (!currentUser) {
      throw new Error('User not signed in');
    }

    const userRef = doc(firestoredb, 'users', currentUser.uid);
    const joinedRoomsRef = collection(userRef, 'joinedRooms');
    const roomRef = doc(joinedRoomsRef, {roomId});

    await deleteDoc(roomRef);
    console.log('User left room successfully.');
  } catch (error) {
    console.error('Error leaving room:', error);
  }
}


 export {joinRoom,leaveRoom}