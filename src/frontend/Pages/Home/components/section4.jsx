import '../../../Styles/Home/section4.css';
import { Link } from 'react-router-dom';

function Section4(){
    return(
        <>
        <div className="section4-conatiner">
        <div className="section4">
            <h2>Join Us Now</h2>
           <Link to="/sign-up"> <input type='button' className='button' value="Sign Up"></input> </Link>
        </div>
        </div>
        </>
    )
}
export default  Section4;