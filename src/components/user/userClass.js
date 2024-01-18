import React from "react";
import "./user.css"

class UserClass extends React.Component {
    
    
    constructor(props){
        super(props)
        // console.log(this.props)

        this.state = {
            count: 0,
            count2: 1,
        }
      }  
    render(){

        const{name, location} = this.props

        const{count, count2} = this.state
    return(
        <div className="user-functional">
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
        <h4>Contact No: 1234567890</h4>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
    </div>
    )}
}

export default UserClass;