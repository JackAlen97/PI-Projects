import  "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Users } from "../../pages/dummydata";
import CloseFriend from "./closefriend.jsx"

export default function Sidebar(){
    return(
        <div className="sidebar">
        <div className="sidewrapper">
            <ul>
           <li className="sidebarlistitem">
            <RssFeedIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Feed</span>
            </li>
            <li className="sidebarlistitem">
            <ChatIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Chats</span>
            </li>
            <li className="sidebarlistitem">
            <GroupsIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Groups</span>
            </li>
            <li className="sidebarlistitem">
            <WorkIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Jobs</span>
            </li>
            <li className="sidebarlistitem">
            <EventIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Events</span>
            </li>
            <li className="sidebarlistitem">
            <SchoolIcon className="sidebaricon"/> 
            <span className="sidebarlistitemtext">Courses</span>
            </li>
            <li className="sidebarlistitem">
            <CurrencyExchangeIcon className="sidebaricon"  /> 
            <span className="sidebarlistitemtext">Dollar Rate</span>
            </li>
            </ul>
            <button className="sidebarbutton">Show More</button>
            <hr className="sidebarhr"/>
            <ul className="sidebarfreindlist">
                <li className="sidebarfreind"><img className="sidebarfriendimg" src="/assets/274239206_1682111922125026_2387696180964272723_n.jpg" alt="" /><span className="sidebarfriendname">
                   Kamal Kerbaj </span></li>
                   <li className="sidebarfreind"><img className="sidebarfriendimg" src="/assets/305743460_3368649223414219_6239633572805468328_n.jpg" alt="" /><span className="sidebarfriendname">
                   Bahaa Harmoush </span></li>
                   <li className="sidebarfreind"><img className="sidebarfriendimg" src="/assets/depositphotos_252773324-stock-illustration-young-avatar-face-with-sunglasses.jpg" alt="" /><span className="sidebarfriendname">
                   Jad Hassanieh </span></li>
                   <li className="sidebarfreind"><img className="sidebarfriendimg" src="/assets/271748395_1824831901049415_3888796232070611151_n.jpg" alt="" /><span className="sidebarfriendname">
                  Jad Zahereddine </span></li>
                   <li className="sidebarfreind"><img className="sidebarfriendimg" src="/assets/167638976_1351459615210025_1286690528826557423_n.jpg" alt="" /><span className="sidebarfriendname">
                   Alaa Harmoush </span></li>
                   {Users.map(u=>(
                    <CloseFriend key={u.id} user={u}/>
                   ))}
                   
            </ul>
            </div>
            </div>
        
    )
}