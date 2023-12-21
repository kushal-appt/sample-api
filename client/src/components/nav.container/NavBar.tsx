import { navbarStyle } from "./navbar.style";
import Logo from "../../assets/logo.png"
import { BellOutlined, QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import profile from "../../assets/Icon-Wrapper.png"



const NavBar :React.FC = ()=>{
    const classes = navbarStyle()
    return <div className={classes.navContainer}>
        <div className={classes.logoConatiner}>
            <div className={classes.imgContainer}>
                <img src={Logo}/>
            </div>
            <span className={classes.logoText}>WEATHER TECH</span>
        </div>
        <div className={classes.navMainContainer}>
            <div className={classes.searchContainer}>
                <SearchOutlined style={{fontSize:"18px"}}/>
            </div>
            <div className={classes.questionCircled}>
                <QuestionCircleOutlined style={{fontSize:"18px"}}/>
            </div>
            <div className={classes.notification}>
            <Badge count={3} showZero>
            <BellOutlined style={{fontSize:"18px",color:"#ffff"}}/>
           </Badge>
            </div>
            <div className={classes.accountProfile}>
                   <img src={profile}/>
                   <span className={classes.profileName}>Akhil</span>
            </div>
        </div>
    </div>
}

export default NavBar;