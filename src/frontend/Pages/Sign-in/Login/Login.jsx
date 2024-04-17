import "../../../Styles/Sign-in/Login.css";
import Header from "../../Home/components/header";
import Footer from "../../Home/components/Footer";
import loginImage from "../../../Images/Login/login-image.png";
import { autho } from "../../../../backend/firebase";
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence,browserSessionPersistence,sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/loading";

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    if(autho.currentUser){
      navigate("/Dashboard")
    }
  })
  
  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(autho, email);
      alert("Password reset email sent. Check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      alert("Error sending password reset email. Please try again.");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    
    setIsButtonDisabled(true);

    try {
     
      const userCredentials = await signInWithEmailAndPassword(autho, email, password);
     // Set persistence based on rememberMe state
     const persistenceType = rememberMe ? browserLocalPersistence : browserSessionPersistence;
     await setPersistence(autho, persistenceType);

      const user = userCredentials.user;
      console.log(user);
     setTimeout(() => {
      alert('User signed in successfully');
     }, 2000); 
      navigate('/Dashboard');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    setTimeout(()=>{alert(`${errorCode}: ${errorMessage}`);},2000)  
    }finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000);
    }
  }

  return (
    <>
      <Header />
      <div className="login-page">
        {isButtonDisabled? <Loading /> :
        <div className="l-container">
          <div className="img-container"><img src={loginImage} alt="" /></div>
          <div className="login-container">
            <div>
              <h2>Welcome back </h2>
              <p>Log in your account</p>
            </div>
            <form className="login-form" onSubmit={isButtonDisabled ? null : login}>
              <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className="options">
                <label>
                  <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                  Remember me
                </label>
                <a onClick={handleForgotPassword} disabled={isButtonDisabled} style={{cursor:"pointer"}}>Forgot password?</a>
              </div>
              <button type="submit" id="continue-btn" disabled={isButtonDisabled}>Continue</button>
            </form>
            <div className="login-container-bottom">
              <p>Don't have an account?</p><a href="Sign-up">Sign up</a>
            </div>
          </div>
        </div>
}
      </div>
    
      <Footer />
    </>
  )
}

export default Login;
