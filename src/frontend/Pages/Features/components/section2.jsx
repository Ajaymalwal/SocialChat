import "../../../Styles/Features/section2.css"
import Features1img from "../../../Images/Features/Features-1.png"
import Features2img from "../../../Images/Features/Features-2.png"
import Features3img from "../../../Images/Features/Features-3.jpg"

function Section2(){
    return(
        <>
        <div className="Section2">
            <div className="features-conatiner">
               <div className="features">
                <div className="features-img"><img src={Features1img} alt="" /></div>
                <div className="feature-info">
                    <h2>Feature1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellendus minima, accusantium culpa laboriosam amet.</p>
                 
                </div>
               </div>
               <div className="features">
                <div className="features-img"><img src={Features2img} alt="" /></div>
                <div className="feature-info">
                    <h2>Feature1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellendus minima, accusantium culpa laboriosam amet.</p>
                 </div>
               </div>
               <div className="features">
                <div className="features-img"><img src={Features3img} alt="" /></div>
                <div className="feature-info">
                    <h2>Feature1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repellendus minima, accusantium culpa laboriosam amet.</p>
                 
                </div>
               </div>
            </div>
        </div>
        </>
    )
}
export default Section2