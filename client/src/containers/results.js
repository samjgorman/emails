//this is a container for results to be displayed within, triggered after sending a post request 
import styled, { css } from 'styled-components'
import React, {Component} from 'react'; 
import Box from '../containers/box'; 



class Results extends Component{

    constructor(props){
        super(props);
            this.state = {
                people: [],
                people_const: [],
                copied: false
            };
        }


     //This function handles fetching all scholarship data.  Then, it sorts the produced array in ascending order to the current date.
  componentDidMount() {

    //try a post 
    fetch('http://localhost:9000/api/emails', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "domain": 'peerlift.org'
        })
        })

    //get the data
    fetch('http://localhost:9000/api/emails')
      .then(res => res.json())
      .then((data) => {

        this.setState({ people: data[0] })
        //Define a constant state of the data, that we'll use to reset the state when needed.
        this.setState({ people_const: data })

      })
      .catch(console.log)
  }

    render() {

        //want to map over each value in the stored array to create a box of content 
        return (
            <React.Fragment> 
            <div className = "Results"> I have results</div>
            {/* {this.state.people.map((person) =>
                <React.Fragment> 
           
               
   
               <Box 
               id = {person.domain}
               title = {person.webmail}
               > 
                </Box> 
             
   
                 </React.Fragment> */}
   
               )}; */}
            </React.Fragment>
            
        );
    }
  }
  
  export default Results;