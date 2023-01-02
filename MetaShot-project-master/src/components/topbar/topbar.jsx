import React from "react";
import "./topbar.css" ;
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar(){
    return(
        <div className="topbarcontainer">
            <div className="topbarleft">
                <span className="logo">MetaShot</span></div> 
            <div className="topbarcenter"> 
            <div className="searchbar">
                <SearchIcon className="searchicon"/> <input placeholder="Search Freinds Or Be Lonely" className="searchinput" /></div></div> 
          <div className="topbarright">
          <div className="topbarlinks"><span className="topbarlink">Homepage</span>
           <span className="topbarlink">Timeline</span>
            </div> 
            <div className="topbaricons">
                <div className="topbariconitem">
                    <PersonIcon/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                    <ChatIcon/>
                    <span className="topbariconbadge">2</span>
                </div>
                <div className="topbariconitem">
                    <NotificationsIcon/>
                    <span className="topbariconbadge">1</span>
                </div>
                <img className="topbarimg" src="\assets\6.jpg"/>
            </div>
            </div></div>
    )
}