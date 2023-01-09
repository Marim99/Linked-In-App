import "../style/InputOption.css";
const InputOption = ({ title, Icon, color }) => {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} className="OptionIcon" />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
