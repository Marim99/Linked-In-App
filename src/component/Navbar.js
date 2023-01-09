import { BsSearch, BsFillChatDotsFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ImHome } from "react-icons/im";
import { MdGroup, MdWork } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import "../style/Navbar.css";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux/es/exports";
import { logout } from "../features/userSlice";
import { auth } from "./firebase";
import { selectUser } from "../features/userSlice";
const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header-left">
        <img src="" alt="" />
        <div className="search">
          <BsSearch />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={ImHome} title={"Home"} />
        <HeaderOption Icon={MdGroup} title={"My Network"} />
        <HeaderOption Icon={MdWork} title={"Jobs"} />
        <HeaderOption Icon={BsFillChatDotsFill} title={"Messaging"} />
        <HeaderOption Icon={MdNotificationsActive} title={"Notifications"} />
        <HeaderOption
          avatar={user && user.photoURL}
          title={"me"}
          onClick={logOutOfApp}
        />
      </div>
    </div>
  );
};

export default Navbar;
