import "../../../Styles/Features/section3.css"
import featureboximg from "../../../Images/Features/Features-3.jpg"
function Section3(){
    return(
        <>
        <div className="feature-section3-container">
         <div className="feature-section3">
        <div className="feature-section3-info">
            <h2>Get Started !</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eius?</p>
            <input type='button' value="Sign Up"></input>
        </div>
        <div className="feature-section3-img"><img src={featureboximg} alt="" /></div>
        </div>
        </div>
        </>
    )
}
export default Section3