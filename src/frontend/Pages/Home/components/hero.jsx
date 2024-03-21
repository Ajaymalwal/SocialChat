import '../../../Styles/Home/hero.css';
import image1 from '../../../Images/hero/image1.png';
import image2 from '../../../Images/hero/image2.png';
import image3 from '../../../Images/hero/image3.png';
import image4 from '../../../Images/hero/image4.png';
import image5 from '../../../Images/hero/image5.png';
import image6 from '../../../Images/hero/image6.png';
import image7 from '../../../Images/hero/image7.png';
import image8 from '../../../Images/hero/image8.png';
import { useNavigate } from 'react-router-dom';


 function Hero() {

  const navigate = useNavigate();
 return(
<>
<div className='hero-container'>
   <div className="image-container">
    <img className='image1 hero-images' src={image1} alt="" />
    <img src={image2} alt="" className="image2 hero-images" />
    <img src={image3} alt="" className="image3 hero-images" />
    <img src={image4} alt="" className="image4 hero-images" />
    <img src={image5} alt="" className="image5 hero-images" />
    <img src={image6} alt="" className="image6 hero-images" />
    <img src={image7} alt="" className="image7 hero-images" />
    <img src={image8} alt="" className="image8 hero-images" />
    

    </div>

  <div className='text'>
  <p>
    Welcome to the
SocialChat   </p>
    <p> Connect to the world, with SocialChat</p>
   
 
    <input type="button" value="Sign Up" className='button' onClick={()=>{navigate('/Sign-up')}}/>
  </div>
</div>
</>
 );
}
export default Hero;