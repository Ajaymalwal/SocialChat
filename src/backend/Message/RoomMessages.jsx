import {  database, firestoredb } from '../firebase';
import {push,ref,onValue} from 'firebase/database';
import { collection,doc,getDoc } from 'firebase/firestore';






function PushMessage(messagefile,roomId){
     const messageRef = ref(database,`Rooms/public/${roomId}/messages`)
     push(messageRef,{messagefile})

}
/*
async function GetMessages(roomId) {
  
  const messagesRef = ref(database, `Rooms/public/${roomId}/messages`);
  const accumlatedMessages = []
 await onValue(messagesRef, (snapshot) => {
      const newItems = snapshot.val();
      if (newItems) {
          const receivedMessages = Object.values(newItems);
        
          receivedMessages.forEach((e) => accumlatedMessages.push({ ...e.messagefile }))
          console.log(accumlatedMessages)
          
      }
  }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
  });
  await new Promise((resolve) => setTimeout(resolve, 100));
  return accumlatedMessages;
 // Return the messages array
}
*/

async function  GetRoomMembers(roomId){
   
        const roomMembersRef = ref(database,`Rooms/public/${roomId}/members`)
        const roomMembersdataref = collection(firestoredb,'Users')
        const Membersdata =[]
      await  onValue(roomMembersRef,(snapshot)=>{
            const newItems = snapshot.val()
            if(newItems){
                const receivedMembers = Object.values(newItems);
                console.log("receivedMemers",receivedMembers)

               
               for(const i in receivedMembers){
              const uid = receivedMembers[i].memberId;
                console.log("uid : ",uid)
                async function getUserMetadataByUID(uid) {
                  try {
                    const docSnap = await getDoc(doc(roomMembersdataref, uid));
                    if (docSnap.exists()) {
                     
                      const userData = docSnap.data();
                      Membersdata.push(userData)
                     
                    } else {
                      console.log('No such document!');
                      return null;
                    }
                  } catch (error) {
                    console.log('Error getting document:', error);
                    return null;
                  }
                }
                
               
                getUserMetadataByUID(uid);
              }
              console.log(Membersdata)

              
             
               
            }
           
        })
    
        return Membersdata
                


 }



 export {PushMessage,GetRoomMembers};