import '../../../Styles/Home/section3.css';
import Feature1 from '../../../Images/section3/1.svg';
import Feature2 from '../../../Images/section3/2.svg';
import Feature3 from '../../../Images/section3/3.svg';
import Feature4 from '../../../Images/section3/4.svg';

function Section3 (){
    return(
        <>
        <div>
            <div className='section3'><h2>Features</h2></div>
            <div className='home-features'>
                <div className='feature-box1'>
                    <div className='box1 box'>
                        <h3>Feature</h3>
                        <p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla</p>
                        <p>Try now</p>
                        <img src={Feature1} alt="" />
                    </div>
                    <div className='box2 box'>
                        <h3>Feature</h3>
                        <p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla</p>
                        <p>Try now</p>
                        <img src={Feature2 }alt="" />
                    </div>
                </div>
                <div className='feature-box1' >
                    <div className='box3 box'>
                        <h3>Feature</h3>
                        <p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla</p>
                        <p>Try now</p>
                        <img src={Feature3 }alt="" />
                    </div>
                    <div className='box4 box'>
                        <h3>Feature</h3>
                        <p>Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla</p>
                        <p>Try now</p>
                        <img src={Feature4}alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section3;