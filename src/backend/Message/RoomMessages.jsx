import {  database, firestoredb } from '../firebase';
import {push,ref,onValue} from 'firebase/database';
import { collection,doc,getDoc } from 'firebase/firestore';


function PushMessage(messagefile,roomId){
     const messageRef = ref(database,`Rooms/public/${roomId}/messages`)
     push(messageRef,{messagefile})

}

async function  GetRoomMembers(roomId){
   
        const roomMembersRef = ref(database,`Rooms/public/${roomId}/members`)
        const roomMembersdataref = collection(firestoredb,'Users')
        const Membersdata =[]
      await  onValue(roomMembersRef,(snapshot)=>{
            const newItems = snapshot.val()
            if(newItems){
                const receivedMembers = Object.values(newItems);
                console.log("receivedMembers",receivedMembers)

               
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