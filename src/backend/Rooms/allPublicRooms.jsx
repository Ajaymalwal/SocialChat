import { collection, getDocs,getDoc,doc } from 'firebase/firestore';
import { firestoredb } from '../firebase';

 async function getAllPublicRoomsData() {
  try {
    const publicRoomsRef = collection(firestoredb, 'publicRooms');
    const querySnapshot = await getDocs(publicRoomsRef);
    
    const allRoomsPromises = querySnapshot.docs.map(async (roomDoc) => {
      const roomId = roomDoc.id;
      // Get room details of all publicRooms collection
      const roomData = await getDoc(doc(collection(firestoredb, 'publicRooms'), roomId));
      if (roomData.exists()) {
          return { id: roomId, ...roomData.data() };
      }
  });

  const allRooms = await Promise.all(allRoomsPromises)

    console.log('Public rooms retrieved:', allRooms.filter(room => room));
    return allRooms.filter(room => room);
  } catch (error) {
    console.error('Error retrieving public rooms:', error);
    return [];
  }
}


export{ getAllPublicRoomsData}