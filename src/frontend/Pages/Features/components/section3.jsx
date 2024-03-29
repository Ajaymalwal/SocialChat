import "../../../Styles/Features/section3.css"
import featureboximg from "../../../Images/Features/Features-3.jpg"
import { Link } from "react-router-dom"


function Section3(){
    return(
        <>
        <div className="feature-section3-container">
         <div className="feature-section3">
        <div className="feature-section3-info">
            <h2>Get Started !</h2>
            <p>Connect to the world, with Social Chat</p>
          <Link to="/sign-up">  <input type='button' value="Sign Up"></input> </Link>
        </div>
        <div className="feature-section3-img"><img src={featureboximg} alt="" /></div>
        </div>
        </div>
        </>
    )
}
export default Section3