import "./online.css";
import Users from "../../pages/dummydata";


export default function Online({user}) {
  return (
    <li className="rightbarfriend">
            <div className="rightbarprofileimgcontainer">
              <img className="rightbarimg" src={user.profilePicture} alt="" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername" >{user.username}</span>
            </li>
  );
}
