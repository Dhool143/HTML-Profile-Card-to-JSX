
import react from "react"
import profilePic from "./images/profile.png";

function UserProfile({ name, email}) {

    return (
        <dive className="Profile-card"> 

        <h1>User Profile</h1>

        <img src={profilePic} alt="User photo" className="photo"/>
        
        <p>Name: {name || "No Name Provided"}</p>
        <p>Email: {email || "No Email Provided"}</p>
        
        {email &&(
        <a href={`mailto:${email}`}> Send Email
        </a>
        )}
        </dive>


    );

}
export default UserProfile;
