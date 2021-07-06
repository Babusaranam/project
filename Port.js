import React from "react"
import {Link} from "react-router-dom"

function Port(){
    return(
        <div className="port">
            Hai thi si about me
            <Link type="button" to="Contact">Click Here to Contact</Link>
        </div>
    )
}
export default Port;