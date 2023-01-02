import "./feed.css";
import Share from "./share";
import Post from "./post"
import {Posts} from "../../pages/dummydata";

export default function feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share/>
        
       {Posts.map((p) =>(
        <Post key={p.id} post={p}/>
       ))}

      
    
      </div>
    </div>
  )
}
