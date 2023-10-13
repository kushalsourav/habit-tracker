import Progress from "../../Components/Progress/Progress";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./ProgressPage.css";

const ProgressPage = () => {
  return (
    <div className="progress-page">
      <Sidebar />
      <Progress />
    </div>
  );
};

export default ProgressPage;
