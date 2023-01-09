import { selectUser } from "../features/userSlice";
import "../style/Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItems = (topic) => (
    <div className="sidebar-recentItems">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"
          alt=""
        />
        <div className="sidebar-avatar">
          {user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <h1>{user.displayName[0]}</h1>
          )}
        </div>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-stateNumber">480</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-stateNumber">189</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("Reactjs")}
        {recentItems("Reactjs")}
        {recentItems("software")}
        {recentItems("UIUX")}
      </div>
    </div>
  );
};

export default Sidebar;
