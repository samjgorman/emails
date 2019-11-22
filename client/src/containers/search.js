//this is a form that sends a post request to the database given the domain of the company 

import styled, { css } from 'styled-components'
import React, {Component} from 'react'; 
import { Router, Route, Switch,Link, Redirect } from "react-router-dom";


class Search extends Component{

    constructor(props){
        super(props);
            this.state = {
                domain: "",
                copied: false,
                redirect: false
            };
        }

    changeHandler = e => {
        this.setState({domain: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault()
        console.log("should input test data" +this.state)
        // fetch('http://localhost:9000/api/emails', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         "domain": this.state.domain
        //     })
        //     })
        //     this.setState({copied: true});
    }

    setRedirect = () => {
        if(this.state.redirect){
            this.setState({
                redirect: false
            })
        }
        else{ 
        this.setState({
            redirect: true
        })
        }
    }

     //link within button
    render() {
        return (
            <div className = "SignUpContainer"> 
            <div className = "SignUpTitle">Search for any company ✨  </div>
            <form onSubmit= {this.submitHandler} className = "Form">
                <input className = "SignUpInput" type = "text" placeholder = "Enter a company domain                                                           " 
                value ={this.state.domain} onChange = {this.changeHandler}>
                </input>
                <button type = "submit" className = {this.state.copied ? "hidden": "SignUpButton"} onClick = {this.setRedirect} > 
                Search
                </button>
            </form>
                 {this.state.redirect ? <Redirect to='/results'/> : null}

            </div>
        );
    }
  }
  
  export default Search;