import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Imageupload from "./imageupload.js";
import { Button } from "@mui/material";


export default function share() {
    
  return (
    <div>
      <div className="share">
        <div className="sharewrapper">
            <div className="sharetop">
                <img className="shareprofileimg" src="/assets/1.jpg"/>
                <input placeholder="what's in your mind sadik " className="shareinput"/>
        
            </div>
            <hr className="sharehr"/>
            <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                    <PermMediaIcon htmlColor="tomato" className="shareicon"/>
                    <div className="shareoptiontext" >     
  <input style={{display:'none'}} accept="image/*" type="file" id="select-image" />
  <label htmlFor="select-image">
  <Imageupload/>
  </label>
</div>

                </div>
        
                <div className="shareoption">
                    <LabelIcon htmlColor="blue" className="shareicon"/>
                    <span className="shareoptiontext">Tag </span>

                </div>
        
                <div className="shareoption">
                    <RoomIcon htmlColor="green" className="shareicon"/>
                    <span className="shareoptiontext"> Location</span>

                </div>
                
                
            
                <div className="shareoption">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className="shareicon"/>
                    <span className="shareoptiontext"> Feelings</span>

                </div>
                </div>
                <button className="sharebutton">Share</button>
                
            </div>
            </div>
           

        </div>
      </div>

  );
}
