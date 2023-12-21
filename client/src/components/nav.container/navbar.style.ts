import { Flex } from "antd";
import { createUseStyles } from "react-jss";
import { globalStyles } from "../../utilis/globalstyles";



export const navbarStyle = createUseStyles ({
    navContainer :{
       width:"100%",
       height:"48px",
       backgroundColor:"rgba(0, 21, 41, 1)",
       display:"flex",
       justifyContent:"space-between",
    },
    logoConatiner:{
        width:"197px",
        display:"flex",
        height:"48px",
        alignItems:"center",
        color:"#ffff",
        marginLeft:"8px"
    },
    imgContainer : {
        width:"32px",
        height:"32px",
        "& img" :{
            width:"100%",
            height:"100%"
        }
    },
    logoText :{
        width:"137px",
        height:"32px",
        font :"Roboto",
        weight:"700",
        size : "18px",
        lineHeight:"32px",
        marginLeft:"10px"
    },

    navMainContainer:{
      width:"390px",
      height:"48px",
      color:"#ffff",
      marginRight:"30px",
      display:"flex",
      justifyContent:"space-around"
    },
    searchContainer:{
      width:"38px",
      height:"48px",
      ...globalStyles.displayFlex
    },
    questionCircled :{
        width:"38px",
        height:"48px",
        ...globalStyles.displayFlex
    },
    notification:{
        width:"48px",
        height:"48px",
        ...globalStyles.displayFlex,
    },
    accountProfile :{
        width:"87px",
        height:"48px",
        ...globalStyles.displayFlex,
    },
    profileName :{
        Name :"Body/regular",
        font:"Roboto",
        weight : "400",
        size : "14px",
        lineHeight:"22px",
        color:"#ffff",
       
    }
})