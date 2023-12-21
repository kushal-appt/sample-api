import { Outlet } from "react-router-dom"
import { logoStyle } from "./logo.style"



const Logo :React.FC = ()=>{
   
    const classes = logoStyle()

    return  <div className={classes.conatiner}>
      <div className={classes.imagecontainer}>
    <img
      src="https://img.freepik.com/premium-vector/online-registration-sign-up-login-account-smartphone-app-user-interface-with-secure-password-mobile-application-ui-web-banner-access-cartoon-people-vector-illustration_2175-1058.jpg?w=2000"
      alt="signup-source"
    />
  </div>
  <Outlet/>  
    </div>
}

export default Logo