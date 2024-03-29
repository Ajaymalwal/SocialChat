import { collection, doc, increment, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { ref, remove, child, get } from 'firebase/database';
import { firestoredb, autho, database } from '../firebase';

async function RemoveMember(roomId) {
    const memberIdToRemove = autho.currentUser.uid; // The memberId of the user you want to remove
    console.log("roomid in the removemember : ", roomId)

    const roomRef = ref(database, `Rooms/public/${roomId}/members`);
    try {
        const snapshot = await get(roomRef, roomId)
        const members = snapshot.val();
        if (members) {
            console.log(members)
            let tokenToRemove = null;

            // Find the push token for the memberId you want to remove
            for (const [token, memberInfo] of Object.entries(members)) {
                if (memberInfo.memberId === memberIdToRemove) {
                    tokenToRemove = token;
                    break;
                }
            }

            // If we found a token, remove that member
            if (tokenToRemove) {
              try{
                    remove(child(roomRef, tokenToRemove))
                    console.log("User removed successfuly.")
              }
              catch(error){
                console.log("Error in removing the user from the RoomId in RTDB: ",roomId)
              }
            } else {
                console.log('Member not found.');
            }
          } else {
            console.log("Members not successfully fetched ")
        }
    } catch (error) {
        console.log("Error in fetching the member from RTDB: ", error);
    }

            // After removing from Realtime Database, proceed with Firestore operations
            const roomToUpdateRef = doc(firestoredb, 'publicRooms', roomId);
            try {
                await updateDoc(roomToUpdateRef, {
                    memberCount: increment(-1) // Decreases member count by 1
                });
                console.log('Member count updated successfully!');
            } catch (error) {
                console.error('Error updating member count:', error);
            }

            const userRef = doc(firestoredb, 'users', memberIdToRemove);
            const joinedRoomsRef = collection(userRef, 'joinedRooms');
            const roomRefFirestore = doc(joinedRoomsRef, roomId);
            const roomDocSnap = await getDoc(roomRefFirestore);

            if (roomDocSnap.exists()) {
                try {
                    await deleteDoc(roomRefFirestore); // Use deleteDoc to remove the document
                    console.log('Room removed from joinedRooms successfully!');
                } catch (error) {
                    console.error('Error removing room from joinedRooms:', error);
                }
            } else {
                console.log('Room does not exist in joinedRooms.');
            }
       
}

export default RemoveMember;
