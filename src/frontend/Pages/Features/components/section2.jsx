import "../../../Styles/Features/section2.css";
import Features1img from "../../../Images/Features/Features-1.png";
import Features2img from "../../../Images/Features/Features-2.png";
import Features3img from "../../../Images/Features/Features-3.jpg";

function Section2() {
  return (
    <>
      <div className="Section2">
        <div className="features-conatiner">
          <div className="features">
            <div className="features-img">
              <img src={Features1img} alt="" />
            </div>
            <div className="feature-info">
              <h2>Public Rooms</h2>
              <p>
                Users can explore and join public rooms based on various topics
                or interests. Whether it's discussing hobbies, movies, or
                current events, there's a room for everyone.
              </p>
            </div>
          </div>
          <div className="features">
            <div className="features-img">
              <img src={Features2img} alt="" />
            </div>
            <div className="feature-info">
              <h2>Real-time chat</h2>
              <p>
                Experience instant communication with real-time messaging
                capabilities. Engage in dynamic conversations with other users
                within the room, with messages appearing Instantly as they are
                sent. This feature creates a vibrant and interactive environment
                where users can connect, share ideas, and build relationships in
                real- time.
              </p>
            </div>
          </div>
          <div className="features">
            <div className="features-img">
              <img src={Features3img} alt="" />
            </div>
            <div className="feature-info">
              <h2>User-Created Rooms</h2>
              <p>
                Empowering users to create their own rooms, this feature allows
                individuals to tailor their chat experience to specific themes
                or purposes
              </p>
            </div>
          </div>
          <div className="features">
            <div className="features-img">
              <img src={Features3img} alt="" />
            </div>
            <div className="feature-info">
              <h2>Seamless Joining Process</h2>
              <p>
                Joining a room is effortless with our intuitive interface. Users
                can browse through available rooms, read descriptions, and
                instantly join the conversation with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section2;
