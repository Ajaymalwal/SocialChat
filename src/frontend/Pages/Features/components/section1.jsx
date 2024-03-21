import "../../../Styles/About us/section1.css";
import Feature1img from "../../../Images/Features/Feature1.png"

function Section1(){
    return(<>
    <div className="A-section1">
        <div className="A-section1-1">
            <h2>Features</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio facilis! Accusamus laboriosam quas quibusdam, esse tenetur totam! Repudiandae quae nam dicta totam sequi. Quibusdam facilis impedit pariatur omnis molestiae?</p>
        </div>
        <div className="A-section1-2">
             <img src={Feature1img} alt="About Us Image1" />
        </div>
    </div>
    </>)
}
export default Section1;