import React from "react"
import {Link} from "react-router-dom"

function BabuSaranam(){
    return(
        <div className="name">
            <h1>Haii, I am Babu saranma,</h1> 
            <h2>fulltime UI Developer Worked as Both FrontEnd and BackEnd Developer </h2>
            
            <div className="name1">
                <div>
            <Link type="button" className="btn btn-success border border-secondary" to="Port">Portfolio</Link>
            </div>
            <div className="name3">
            <Link type="button" className="btn btn-success border border-secondary" to="MYoffer">Myoffer</Link>
            </div>
            </div>
        </div>
    )
}
export default BabuSaranam;