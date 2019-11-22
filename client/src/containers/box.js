import React, {Component} from 'react'; 
import '../components/OppBox.css';
import { withRouter, Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import shareButton from '../images/share@2x.png';


const Box = ( {id, title} ) => {

  return(

    <div className = 'wrapper'>

    <button className = "OppBox" onClick={onPress} oppId = {id}>
    
    <div  className = 'Title'> {title}</div>

    </button>
    </div>
  )
}

export default Box;
