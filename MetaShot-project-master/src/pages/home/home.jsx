import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/topbar/sidebar";
import Feed from "../../components/topbar/feed";
import Rightbar from "../../components/topbar/rightbar";
import "./home.css";
import Imageupload from "../../components/topbar/imageupload";
export default function Home(){
    return(
        <>
        <Topbar/>
        <div className="homecontainer">
            <Sidebar/>
            <Feed/>
            
            <Rightbar/>
            </div>
        
        </>
    )}
   