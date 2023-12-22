import { createUseStyles } from "react-jss";
import { globalStyles } from "../../utilis/globalstyles";

export const bodyStyles = createUseStyles({
    ...globalStyles,
    bodyContainer :{
        width:"88%",
        height:"815px",  
    },
    bodyheaderConatiner :{
        width:"100%",
        minHeight:"190px",
        backgroundColor:"#ffff",
        display:"flex",
        flexFlow:"column",
        justifyContent:"space-around",
        padding:"10px",
        boxSizing:"border-box",
    },
    dContainer:{
      width :"100%",
      minHeight:"72px",
      display:"flex",
      justifyContent:"space-between",
      flexFlow:"wrap",
    },

    descriptionContainer :{
        width:"65%",
        height:"72px",
        display:"flex",
    },
    welcomeContainer :{
        width:"90%",
    },
    ProfileIntro : {
        width:"50%",
        fontSize:"20px",
        fontWeight:"500",
        height:"30px",
        ...globalStyles.textFlow,
        marginBottom:"10px"
    },
    profilePara : {
        width:"90%",
        fontSize:"14px",
        fontWeight:"400",
        height:"30px",
        ...globalStyles.textFlow

    },
    profileResult:{
        width:"30%",
        height:"72px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
    },
    productContainer :{
        width:"97%",
        height:"600px",
        display:"flex",
        margin:"20px",
    },
    toolsContainer : {
        width:"60%",
        height:"340px",
        backgroundColor:"#ffff"
    },
    product:{
        width:"100%",
        height:"290px",
        marginTop:"10px",
        display:"flex",
        flexFlow:"wrap",
        justifyContent:"center"
    },
    productDetails:{
        height:"24px",
        display:"flex",
        alignItems:"center",
        
    },
    graphDetailsContainer :{
        width:"40%",
        height:"600px",
        display:"flex",
        justifyContent:"center",
        flexFlow:"wrap"
    }
})