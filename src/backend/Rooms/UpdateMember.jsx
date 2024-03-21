import { collection, doc, increment, updateDoc, getDoc } from 'firebase/firestore';
import { firestoredb, autho } from '../firebase'; 

async function updateMemberCount(roomId, delta) {
  try {
    const currentUser = autho.currentUser;
    if (!currentUser) {
      throw new Error('User not signed in');
    }

    // Check if user is already joined
    const userRef = doc(firestoredb, 'users', currentUser.uid);
    const joinedRoomsRef = collection(userRef, 'joinedRooms');
    const roomRef = doc(joinedRoomsRef, roomId);
    const roomDocSnap = await getDoc(roomRef);

    if (roomDocSnap.exists()) {
      // User already joined this room, skip member count update
      console.log('User already joined this room, skipping member count update.');
      return;
    }

    // User has not joined this room, update the member count
    const roomToUpdateRef = doc(collection(firestoredb, 'publicRooms'), roomId);
    const updateData = {
      memberCount: increment(delta)
    };
    await updateDoc(roomToUpdateRef, updateData);
    console.log('Member count updated successfully!');
  } catch (error) {
    console.error('Error updating member count:', error);
  }
}

export default updateMemberCount;
