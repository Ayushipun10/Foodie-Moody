import "./user.css"
import {useState} from "react"

const User = () => {

    // state variable in functional component
    const [count] = useState(0);
    const [count2] = useState(1);
    return(
        <div className="user-functional">
            <h1>Name: Ayushi</h1>
            <h4>Location: Delhi</h4>
            <h4>Contact No: 1234567890</h4>
            <h4>Count: {count}</h4>
            <h4>Count2: {count2}</h4>
        </div>
    )
}

export default User;