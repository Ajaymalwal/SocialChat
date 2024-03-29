import '../../../Styles/Home/section3.css';
import Feature1 from '../../../Images/section3/1.svg';
import Feature2 from '../../../Images/section3/2.svg';
import Feature3 from '../../../Images/section3/3.svg';
import Feature4 from '../../../Images/section3/4.svg';
import { Link } from 'react-router-dom';

function Section3 (){
    return(
        <>
        <div>
            <div className='section3'><h2>Features</h2></div>
            <div className='home-features'>
                <div className='feature-box1'>
                    <div className='box1 box'>
                        <h3>Public Rooms</h3>
                        <p>Users can explore and join public rooms based on various topics or interests. Whether it's discussing hobbies, movies, or current events, there's a room for everyone.</p>
                        <Link to="/Features" ><p>Try now</p></Link>
                        <img src={Feature1} alt="" />
                    </div>
                    <div className='box2 box'>
                       <h3 >Real-time chat</h3>
                        <p>Experience instant communication with real-time messaging capabilities. Engage in dynamic conversations with other users within the room, with messages appearing Instantly as they are sent. This feature creates a vibrant and interactive environment where users can connect, share ideas, and build relationships in real- time.</p>
                        <Link to="/Features" ><p>Try now</p></Link>
                        <img src={Feature2 }alt="" />
                    </div>
                </div>
                <div className='feature-box1' >
                    <div className='box3 box'>
                        <h3>User-Created Rooms</h3>
                       <p>Empowering users to create their own rooms, this feature allows individuals to tailor their chat experience to specific themes or purposes</p>
                       <Link to="/Features" ><p>Try now</p></Link>
                        <img src={Feature3 }alt="" />
                    </div>
                    <div className='box4 box'>
                        <h3>Seamless Joining Process</h3>
                        <p>Joining a room is effortless with our intuitive interface. Users can browse through available rooms, read descriptions, and instantly join the conversation with just a few clicks.</p>
                        <Link to="/Features" ><p>Try now</p></Link>
                        <img src={Feature4}alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section3;