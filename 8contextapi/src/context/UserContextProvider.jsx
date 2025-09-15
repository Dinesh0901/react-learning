import React from "react";
import UserContext from "./Usercontext";

const UserContextprovider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.provider value={{user,setUser}}>
        {children}
        </UserContext.provider>
    )
}
export default UserContextprovider
