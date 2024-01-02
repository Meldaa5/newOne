import React from 'react'
import '../../App.css';
import Çagir from '../images/video.mp4'
import * as IoIcons from "react-icons/io";
import {FaLock, FaMailBulk, FaSearch, FaUser, FaVoicemail} from "react-icons/fa";
export default function Home() {
  return (
     <>
   
    <div >
   <video className ='video'src={Çagir} autoPlay loop muted/>
   <div className='home'>
   
         <div className="input-box2">
            <input type="search"  placeholder='Yazara veya Kitaba Göre Ara ...' required/>
           
            < FaSearch className='icon2' />
        </div> 
     
   </div>
     

    </div>   </>
  )
}
