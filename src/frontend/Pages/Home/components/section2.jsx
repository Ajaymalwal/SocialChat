import '../../../Styles/Home/section2.css';
import Aboutimage from '../../../Images/section2/aboutlower.svg';
import GirlImage from '../../../Images/section2/section2-girl.png';
import { Link } from 'react-router-dom';

function Section2(){
    return(
        <>
        <div className="section2-container">
            <div className='section2-1'>
                <div className='about1'>
                    <div className='about1-1'><h2>About US</h2></div>
                    <div className='about1-2'><img src={Aboutimage} alt="About us lower" /></div>
                </div>
                 <div className='about2'>
                     <p>Welcome to our real-time chat app! We're a passionate team of three students dedicated to creating seamless communication experiences. With a focus on user-friendly design and reliable performance, we aim to connect people worldwide. Our app prioritizes privacy and security while fostering meaningful connections. Join us in shaping the future of instant messaging!</p></div>
                    <Link to="/about" style={{textDecoration:"none"}} >   <div className=' about3'><input type="button"  value='Learn more' className='learnbutton' /> </div> </Link>
            </div>
            <div className='section2-2'>
            <div className='girlimage'> <img src={GirlImage} alt="Girl" /></div>
            </div>
        </div>
        </>
    )
}
export default Section2;