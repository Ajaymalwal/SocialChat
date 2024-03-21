import '../../../Styles/Home/header.css';
import logo from '../../../Images/logo/logo.png';
import { Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header (){

    const location = useLocation();
    const activeUnderlineStyle = {
        content: '',
        height: "3px",
        position :"relative",
        bottom:"1px",
        display: "block",
        borderRadius: "5px",
        width: "100%",
        background:" #6D31EDFF",
      };
      

    return(
        <>
    <div className='container'>
        <div className='logo'>
     
                <img src={logo} alt="Logo of the social chat"></img>
         
        </div>
        <div className='header-menu'>
            <div  className='header-menu-item'><p><Link to="/">Home</Link>{location.pathname === '/' && <span style={activeUnderlineStyle}></span>}</p></div>
            <div className='header-menu-item'><p><Link to="/Features">Features</Link>{location.pathname === '/Features' && <span style={activeUnderlineStyle}></span>}</p></div>
            <div className='header-menu-item'><p><Link to="/About" >About Us</Link>{location.pathname === '/About' && <span style={activeUnderlineStyle}></span>}</p></div>
        </div>
        <div className='header-part3'>
        {!(location.pathname === "/Login" || location.pathname === "/Sign-up") && (
  <>
    <div className="button">
      <p>
        <Link to="/Login" className="login-btn">Login</Link>
      </p>
    </div>
    <div className="button">
      <div>
        <p>
          <Link to="/Sign-up" className="signup-btn">Sign up for free</Link>
        </p>
      </div>
    </div>
  </>
)}

        </div> 
    </div>
    </>
    )
}
export default Header;