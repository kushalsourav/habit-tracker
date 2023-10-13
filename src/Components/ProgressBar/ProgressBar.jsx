import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-total">
        <p className="progress-name">Productivity</p>
        <span className="progress-percent">68%</span>
      </div>
      <div className="progress-counts">
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
        <div className="progress-range-bar progress-radius">
          <span className="progress-range progress-radius"></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
