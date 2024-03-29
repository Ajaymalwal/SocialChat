import "../../../Styles/About us/section2.css";

function Section2 (){
    return (

        <>
        <div className="A-section2">
            <div className=" A-section2-1">
                <h2>Our Team</h2>
                <p>This is our incridibal team who create this leading website to connecting people together.Currently we are only three members of this team.</p>
            </div>
            <div className="A-section2-2">
              
                <div className="Team"> 
                    <div className="Team-image"><img src="" alt="" /></div>
                        <div className="Team-info">
                            <h2>Ajay Malwal</h2>
                            <p>Web developer, Created <b>Dashboard, Inbox</b></p>
                            <div></div>
                        </div>
                </div>
              
                <div className="Team"> 
                    <div className="Team-image"><img src="" alt="" /></div>
                        <div className="Team-info">
                            <h2>Ankush Bhujeja</h2>
                            <p>Web developer, Created <b>Home page, Login and Sign-up page</b></p>
                            <div></div>
                        </div>
                </div>
                
                <div className="Team"> 
                    <div className="Team-image"><img src="" alt="" /></div>
                        <div className="Team-info">
                            <h2>Rohit Saini</h2>
                            <p>Web developer, Created <b>Freature page, About us page</b>
                            </p>
                            <div></div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section2;