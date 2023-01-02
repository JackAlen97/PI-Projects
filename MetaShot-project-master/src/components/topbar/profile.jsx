import "./profile.css"
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/topbar/sidebar";
import Feed from "../../components/topbar/feed";
import Rightbar from "../../components/topbar/rightbar";


export default function Profile() {
  return (

         <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileright">
           <div className="profiletop"> 
           <div className="profilecover">
            <img className="profilecoverimg" src="assets\Cz0RP.png" alt="" />
            <img className="profileuserimg" src="\assets\depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt="" />
            </div>
            <div className="profileinfo">
                <h4 className="profileinfoname">admin</h4>
                <span className="profileinfodesc">Cezar Hmadeh</span>
            </div>
            </div>
            <div className="profilebottom">
           
            <Feed/>
            <Rightbar profile/>
            </div>
             </div>
            </div>
        
        </>
    
  );
}
