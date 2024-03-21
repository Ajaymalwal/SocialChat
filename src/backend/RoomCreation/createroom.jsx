import { database } from '../firebase';
import { getDatabase,push,ref,onValue,set} from 'firebase/database';
import { autho ,firestoredb} from '../firebase';
import { addDoc, collection} from 'firebase/firestore';
import { joinRoom } from '../Rooms/joinRoom';



async function RoomCreation(roomName,roomType,roomDisc){
    let roomId;
    let memberId = autho.currentUser.uid;
    let totalMembers = {
      memberId
    }
   
    const roomRef = collection(firestoredb, roomType === 'public' ? 'publicRooms' : 'privateRooms');
        try{
             const newRoomdoc= await addDoc( roomRef,{
                 RoomName : roomName,
                 RoomType : roomType,
                 RoomDisc : roomDisc,
                 CreatedBy : autho.currentUser.displayName,
                 CreaterUid : autho.currentUser.uid,
                 memberCount : 1,

              }) 
            
         console.log("Room created succefully on firestore.",newRoomdoc.id )
          roomId = newRoomdoc.id
         await joinRoom(roomId)

       
    

        }
        catch(error){
            console.error(error);
        }
        try {
            const roomRef = ref(database, `Rooms/${roomType}/${roomId}`);
            await set(roomRef,{});
        
            console.log("Room structure created in Realtime Database.");
          } catch (error) {
            console.error("Error creating room in RTDB:", error);
          }
          try {
            const memberRef = ref(database, `Rooms/${roomType}/${roomId}/members`);
            await push(memberRef,totalMembers);
            console.log("Member added to room (RTDB).");
          } catch (error) {
            console.error("Error adding member:", error);
          }
    }

    

     


export default RoomCreation;