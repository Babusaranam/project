import React,{Component} from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import "./App.css";

import Nav from "./Nav";
import BabuSaranam from "./BabuSaranam";
import Port from "./Port";
import Contact from "./Contact";
import Myoffer from "./Myoffer";


class App extends Component{
  render(){
    return(
      <div className="main">
        <Router>
          <Nav/>
          <Switch>
         <Route path="/BabuSaranam" component={BabuSaranam}/>
          <Route path="/Port" component={Port}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Myoffer" component={Myoffer}/>
          </Switch>
        </Router>
          
      </div>
    )
  }
}
export default App;
