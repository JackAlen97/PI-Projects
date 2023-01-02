import "./rightbar.css";
import { Users } from "../../pages/dummydata";
import Online from "./online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="assets/gift.png" alt="" />
          <span className="birthdaytext">
           It's <b>no one's</b> birthday ,buy <b>yourself</b> a gift.
          </span>
        </div>
        <img className="rightbarad" src="\assets\qrcode_www.instagram.com.png" alt="" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfriendlist">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
          
        
        </ul>
      </>
    )}
    const ProfileRightbar =() =>{
      return (
      <>
      <h4 className="rightbartitle">User Information</h4>
     <div className="rightbarinfo">
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">City:</span>
        <span className="rightbarinfovalue">Baakline</span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">From:</span>
        <span className="rightbarinfovalue">Baakline</span>
      </div>
      <div className="rightbarinfoitem">
        <span className="rightbarinfokey">Relationship:</span>
        <span className="rightbarinfovalue">Error</span>
      </div>
     </div>
     <h4 className="rightbartitle">User Friends</h4>
     <div className="rightbarfollowings">
      <div className="rightbarfollowing">
        <img className="rightbarfollowingimg" src="\assets\ClHX-z4UkAAAbMb.jpg"/>
        <span className="rightbarfollowingname">kamal</span>
      </div>
      <div className="rightbarfollowing">
        <img className="rightbarfollowingimg" src="\assets\ClHX-z4UkAAAbMb.jpg"/>
        <span className="rightbarfollowingname">bahaa</span>
      </div>
      <div className="rightbarfollowing">
        <img className="rightbarfollowingimg" src="\assets\ClHX-z4UkAAAbMb.jpg"/>
        <span className="rightbarfollowingname">jad</span>
      </div>
     </div>
     
     
     
     
     
     
     </>
      )
    }
    return(
      <div className="rightbar" >
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar/> :<HomeRightbar/> }
       </div>
      </div>
    );
    }
