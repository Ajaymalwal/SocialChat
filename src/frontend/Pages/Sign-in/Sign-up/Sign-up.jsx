import "../../../Styles/Sign-in/Login.css";
import "../../../Styles/Sign-in/Sign-up.css";
import Header from "../../Home/components/header";
import Footer from "../../Home/components/Footer";
import loginImage from "../../../Images/Login/login-image.png";
import { createUserWithEmailAndPassword, updateProfile, setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import { autho, firestoredb } from "../../../../backend/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/loading";

function SignuP() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();

    setIsButtonDisabled(true);
    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      collegeName: e.target.elements.college.value,
      UserCity: e.target.elements.city.value,
    };

    try {
      console.log(userData);

      // Set persistence based on the "Remember me" checkbox
      const rememberMeCheckbox = e.target.elements.rememberMe;
      const persistenceType = rememberMeCheckbox.checked ? browserLocalPersistence : browserSessionPersistence;
      await setPersistence(autho, persistenceType);

      const userCredentials = await createUserWithEmailAndPassword(autho, email, password);
      const user = userCredentials.user;
      await setDoc(doc(firestoredb, "Users", user.uid), userData);

      await updateProfile(user, { displayName: username });

      setTimeout(()=> alert("User created successfully:", user),2000);
      navigate('/Dashboard');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(`${errorCode}: ${errorMessage}`);
    }finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 2000); 
    }
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="l-container">
          <div className="img-container"><img src={loginImage} alt="" /></div>
          <div className="login-container">
            <div>
              <h2>Let's Get Started</h2>
              <p>Create your account</p>
            </div>
            <form className="login-form" onSubmit={isButtonDisabled ? null : signup}>
              <input type="text" name="name" placeholder="Enter your name" value={username || ''} onChange={(e) => setUsername(e.target.value)} required />
              <input type="email" name="email" placeholder="Enter your Email" value={email || ''} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" name="password" placeholder="Enter a strong Password" value={password || ''} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />
              <input type="text" name="city" placeholder="Enter your city name" required />
              <input type="text" name="college" placeholder="Enter your college name (if any)" />
              <div className="options">
                <label>
                  <input type="checkbox" name="rememberMe" />
                  Remember me
                </label>
              </div>
              <button type="submit" id="continue-btn" disabled={isButtonDisabled}>{isButtonDisabled ? <Loading/> : "Continue"}</button>
            </form>
            <div className="login-container-bottom">
              <p>Already have an account?</p><a href="Login">Login</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default SignuP;
