import "../../../Styles/About us/section1.css";
import Teamworking from '../../../Images/About us/team-working.png';

function Section1(){
    return(<>
    <div className="A-section1">
        <div className="A-section1-1">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, optio facilis! Accusamus laboriosam quas quibusdam, esse tenetur totam! Repudiandae quae nam dicta totam sequi. Quibusdam facilis impedit pariatur omnis molestiae?</p>
        </div>
        <div className="A-section1-2">
             <img src={Teamworking} alt="About Us Image1" />
        </div>
    </div>
    </>)
}
export default Section1;