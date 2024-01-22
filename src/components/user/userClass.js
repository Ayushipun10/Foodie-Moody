import React from "react";
import "./user.css"

class UserClass extends React.Component {
    
    
    constructor(props){
        super(props)
        // console.log(this.props)

        this.state = {
            count: 0,
           
        }
      }  
    render(){

        const{name, location} = this.props

        const{count} = this.state
    return(
        <div className="user-functional">
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
        <h4>Contact No: 1234567890</h4>
        <h4>Count: {count}</h4>
        <button onClick = 
        {()=> {
            this.setState({
                count : count+1
            })
        }}>Count Increase</button>
    </div>
    )}
}

export default UserClass;