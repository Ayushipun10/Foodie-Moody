import React from "react";
import "./user.css"

class UserClass extends React.Component {
    
    
    constructor(props){
        super(props)
        
        this.state = {
          userInfo: {
            name: "Dummy",
            location: "Default"
          }
           
        }
      }  

    

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ayushipun10");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

       
       
    }
    render(){
      
        const{name, location, avatar_url} = this.state.userInfo
    return(
        <div className="user-functional">
        <img src={avatar_url}/>
        <h1>Name: {name}</h1>
        <h4>Location: {location}</h4>
        <h4>Contact No: 1234567890</h4>
    </div>
    )}
}

export default UserClass;