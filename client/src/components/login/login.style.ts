import { createUseStyles } from "react-jss";

export const loginStyle = createUseStyles({
    
    formcontainer : {
        width: "50%",
       display: "flex",
       flexFlow: "column",
       justifyContent: "center",
       paddingLeft: "80px",
       boxSizing: "border-box",
       border:"1px solid"
    },

    register : {
        cursor: "pointer",
        marginLeft :"7px",
        color:"blue"
    },
    forgotPassword : {
        cursor: "pointer",
        marginLeft :"32%",
        color:"blue"
    }
})