import "./toggleButton.css";

const ToggleButton = () => {
  return (
    <div className="btn btn-rect">
      <input type="checkbox" className="checkbox" />
      <div className="knob">
        <span></span>
      </div>
      <div className="btn-bg"></div>
    </div>
  );
};

export default ToggleButton;
