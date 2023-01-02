import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../pages/dummydata";
import { useState } from "react";

export default function Post({post}){
        const [like,setlike] = useState(post.like)
        const [isliked,setisliked] = useState(false)
        const likeHandler =()=>{
            setlike(isliked ? like-1 : like+1)
            setisliked(!isliked)
        }
    
    return(
        <div className="post">
            <div className="postwrapper">
        <div className="posttop">
            <div className="posttopleft">
               
                <img className="postprofileimg" src={Users.filter(u=>u.id === post?.userId)[0].profilePicture} alt="" />
         
          
          <span className="postusername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
         
         
          <span className="postdate">{post.date}</span>
          
            </div>
            <div className="posttopright"></div>
        <MoreVertIcon/>
        </div>
        <div className="postcenter">
            <span className="posttext">{post?.disc}</span>
            <hr/>
            <img className="postimg" src={post.photo}/>
        </div>
        <div className="postbottom">
            <div className="postbottomleft">
                <img className="likeicon" src="\assets\like.png" onClick={likeHandler} alt=""/>
                <img className="likeicon" src="\assets\heart.png" onClick={likeHandler} alt=""/>
                <span className="postlikecounter">{like} people like it</span>
            </div>
            <div className="postbottomright">
                <span className="postcommenttext">{post.comment} comment</span>
            </div>
        </div>
           
           </div>
        
        </div>
    )
}