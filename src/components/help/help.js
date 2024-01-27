import User from "../user/user";
import UserClass from "../user/userClass";
import Header from "../header/Header";

const HelpPage = () => {
    return (
        <>
        <div>
            <Header/>
            <div>Help page</div>
            <div>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. </div>
            
            <UserClass name={"ayushi class"}
            location={"Delhi Class"}/>
            </div>
        </>
            )
}

export default HelpPage;