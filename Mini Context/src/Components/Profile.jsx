import React ,{useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile(){
    
    const { user } = useContext(UserContext);

    return (
        <div>
            <h3>Welcome {user?.username}</h3>
        </div>
    );
}

export default Profile