import { homeStyle } from "./home.style";
import NavBar from "../nav.container/NavBar";
import SideBar from "../sidebar.container/SideBar";
import Body from "../Body.container/Body";

const Home: React.FC = () => {
  const classes = homeStyle();
  return (
    <div className={classes.homeContainer}>
      <NavBar />
      <div className={classes.combineSideAndOutlet}>
      <SideBar/>
      <Body/>
      </div>
    </div>
  );
};

export default Home;
