import "../style/HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="headerOption-Icon" />}
      {avatar && (
        <div className="headerOption-avatar">
          <img src={avatar} alt="" />
        </div>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
