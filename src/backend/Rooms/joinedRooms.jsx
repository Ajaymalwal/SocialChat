import { firestoredb } from "../firebase";
import { doc, collection, getDocs, getDoc } from "firebase/firestore";
import { autho } from "../firebase";

async function getJoinedRooms() {
    try {
        const currentUser = autho.currentUser; // Get current user
        if (!currentUser) {
            throw new Error('User not signed in');
        }

        const userRef = doc(firestoredb, 'users', currentUser.uid);
        const joinedRoomsRef = collection(userRef, 'joinedRooms');
        const querySnapshot = await getDocs(joinedRoomsRef);

        const joinedRoomsPromises = querySnapshot.docs.map(async (roomDoc) => {
            const roomId = roomDoc.id;
            // Get room details from publicRooms collection
            const roomData = await getDoc(doc(collection(firestoredb, 'publicRooms'), roomId));
            if (roomData.exists()) {
                return { id: roomId, ...roomData.data() };
            }
        });

        // Wait for all promises to resolve
        const joinedRooms = await Promise.all(joinedRoomsPromises);

        console.log('Joined rooms:', joinedRooms.filter(room => room)); // Array of joined room details
        return joinedRooms.filter(room => room); // Remove any undefined values
    } catch (error) {
        console.error('Error getting joined rooms:', error);
        throw error; // Re-throw error to handle it in the calling function
    }
}



export default getJoinedRooms;
