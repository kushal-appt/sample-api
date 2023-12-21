import { createUseStyles } from "react-jss";

export const logoStyle = createUseStyles({
    conatiner : {
        width:"100%",
        display:"flex"
    },
    imagecontainer :{
       width: "50%",
    '& img':{
        width:"100%"
    }
    }
})