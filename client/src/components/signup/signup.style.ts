import { createUseStyles } from "react-jss";

export const signupStyles = createUseStyles({
    conatiner : {
        width:"100%",
        display:"flex"
    },
    
    formcontainer : {
        width: "50%",
       display: "flex",
       flexFlow: "column",
       justifyContent: "center",
       paddingLeft: "80px",
       boxSizing: "border-box"
    }
})