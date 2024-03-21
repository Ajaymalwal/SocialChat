import "../../../Styles/Sign-in/Login.css"
import "../../../Styles/Sign-in/Sign-up.css"
import Header from "../../Home/components/header"
import Footer from "../../Home/components/Footer"
import loginImage from "../../../Images/Login/login-image.png"
import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { autho,firestoredb } from "../../../../backend/firebase";
import { doc,setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function SignuP(){

  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[username,setUsername] = useState('')
  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault();
    const userData = {
      name:e.target.elements.name.value,
      email : e.target.elements.email.value,
      collegeName : e.target.elements.college.value,
      UserCity : e.target.elements.city.value,
    }
  
    try {
      console.log(userData)
   
      const userCredentials = await createUserWithEmailAndPassword(autho, email, password, username);
      const user = userCredentials.user;
      await setDoc(doc(firestoredb,"Users",user.uid),userData);
       
    await updateProfile(user, { displayName: username });

    alert("User created successfully:", user);
    navigate('/Dashboard')

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
  
      alert(errorCode, errorMessage);
    }
  };
  

    return(
        <>
        <Header />
        
          <div className="login-page">
            <div className="l-container">
                <div className="img-container"><img src={loginImage} alt="" /></div>
          
                    <div className="login-container">
                      <div>
                        <h2>Let's Started</h2>
                        <p>Log in your account</p>
                        </div>
                    <form className="login-form" onSubmit={signup}>
                      <input type="text" name="name" placeholder="Enter your name" value={username || ''} onChange={(e)=> setUsername(e.target.value)} required />
                      <input type="email" name="email" placeholder="Enter your Email" value={email || ''} onChange={(e)=> setEmail(e.target.value)} required />
                      <input type="password" name="password" placeholder="Enter a strong Password" value={password || ''}  onChange={(e)=> setPassword(e.target.value)}  required autoComplete="password" />
                      <input type="text" name="city" placeholder="Enter your city name" required/>
                      <input type="text" name="college" placeholder="Enter your college name (if any)" />
                      <div className="options">
                         <label>
                         <input type="checkbox" />
                           Remember me
                         </label>
                        
                     </div>
                      <button type="submit" id="continue-btn">Continue</button>
                    </form>
                    <div className="login-container-bottom">
                        <p>Already have an account?</p><a href="Login">Login</a>
                    </div>
                    </div>
               
            </div>
          </div>

          <Footer />
        </>
    )
}

export default SignuP;