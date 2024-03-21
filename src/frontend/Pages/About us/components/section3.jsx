import "../../../Styles/About us/section3.css";
import Section3image from '../../../Images/About us/Section3-image.png';
function Section3 (){
    return (
        <>
        <div className="A-section3-container">
            <div className="A-section3">
                <div className="A-section3-1">
                    <h2>Let's work together</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis!</p>
                    <button>Join Us</button>
                </div>
                <div className="A-section3-2">
                    <img src={Section3image} alt="Working team together " />
                </div>
            </div>
        </div>
        </>
    )
}

export default Section3;