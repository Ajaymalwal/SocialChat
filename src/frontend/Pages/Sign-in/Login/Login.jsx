import "../../../Styles/Sign-in/Login.css"
import Header from "../../Home/components/header"
import Footer from "../../Home/components/Footer"
import loginImage from "../../../Images/Login/login-image.png"
import { autho } from "../../../../backend/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
  const [email, setEmail] = useState('');
  const[password,setPassword] = useState('');
  const navigate = useNavigate()

  const login =async(e) =>{
    e.preventDefault();
 

    try{
      const userCredentials = await signInWithEmailAndPassword(autho,email,password);
      
      const user = userCredentials.user;
      console.log(user);
      alert('user sign in succusfully');
       navigate('/Dashboard')
       
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode,errorMessage)
  
    }
  
  }

    return(
        <>
        <Header />
        
          <div className="login-page">
            <div className="l-container">
                <div className="img-container"><img src={loginImage} alt="" /></div>
          
                    <div className="login-container">
                      <div>
                        <h2>Welcome back </h2>
                        <p>Log in your account</p>
                        </div>
                    <form className="login-form" onSubmit={login}>
                      <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                      <input type="password" placeholder="Enter your Password" value={password}  onChange={(e)=> setPassword(e.target.value)} required />
                      <div className="options">
                         <label>
                         <input type="checkbox" />
                           Remember me
                         </label>
                         <a href="#">Forgot password?</a>
                     </div>
                      <button type="submit" id="continue-btn">Continue</button>
                    </form>
                    <div className="login-container-bottom">
                        <p>Dont have an account?</p><a href="Sign-up">Sign up</a>
                    </div>
                    </div>
               
            </div>
          </div>

          <Footer />
        </>
    )
}

export default Login;