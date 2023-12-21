import { createUseStyles } from "react-jss";




export const sideBarStyles = createUseStyles({
    sidebarContainer :{
        width:"200px",
        height:"815px",
        backgroundColor:"#ffff",
        border:"1px solid #e3e3e3",
        boxShadow:"1px 1px 1px 1px #e3e3e3",
        display:"flex",
        flexFlow:"column",
        justifyContent:"space-between"
    },
    sideFooter :{
        height:"60px",
    }
})