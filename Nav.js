import React from 'react';
import {Link} from "react-router-dom"


function Nav(){
  return(
   
      <div className="first">
        <div className="third">
         <img src={"https://www.finetoshine.com/wp-content/uploads/2020/09/Jr-N-T-R-Jigsaw-Puzzle-for-Android-APK.jpg"} width= "150px" height="100px"/><br></br>
         <div className="name2">
         <Link  to="./BabuSaranam">BabuSaranam</Link>
         <h5>UI developer</h5>
         </div>
        
         <ul  className="navbar-nav">
           
           <li >
              <Link className="text-white" to="./Port">Port</Link>
              </li>
              <li>
            <Link className="text-white" to="./Contact">Contact</Link>
           </li>
           <li>
           <Link className="text-white" to="./Myoffer">Myoffer</Link>
            </li>
         </ul>
         </div>
          </div>


  
  )
}
export default Nav;