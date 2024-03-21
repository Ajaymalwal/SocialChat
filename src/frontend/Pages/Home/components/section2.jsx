import '../../../Styles/Home/section2.css';
import Aboutimage from '../../../Images/section2/aboutlower.svg';
import GirlImage from '../../../Images/section2/section2-girl.png';


function Section2(){
    return(
        <>
        <div className="section2-container">
            <div className='section2-1'>
                <div className='about1'>
                    <div className='about1-1'><h2>About US</h2></div>
                    <div className='about1-2'><img src={Aboutimage} alt="About us lower" /></div>
                </div>
                 <div className='about2'> <p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ullamco et. Aliqua tempor do consectetur reprehenderit Lorem aliqua commodo occaecat deserunt. Do eiusmod incididunt</p></div>
                 <div className=' about3'><input type="button"  value='Learn more' className='learnbutton' /> </div>
            </div>
            <div className='section2-2'>
            <div className='girlimage'> <img src={GirlImage} alt="Girl" /></div>
            </div>
        </div>
        </>
    )
}
export default Section2;