import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartSimple,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";

const Sidebar = ({ setCloseModal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authState, authDispatch } = useAuth();
  console.log(authState);
  return (
    <div className="sidebar">
      <h3 className="sidebar-head">Be Better</h3>
      <Link to="/Habit" className="sidebar-box">
        <div className="sidebar-info">
          <FontAwesomeIcon icon={faHome} />
          <span className="sidebar-title">Today</span>
        </div>
        <span
          className="sidebar-add"
          onClick={() => {
            location.pathname === "/Habit" && setCloseModal();
          }}
        >
          <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
        </span>
      </Link>
      <Link to="/Progress" className="sidebar-box">
        <div className="sidebar-info">
          <FontAwesomeIcon icon={faChartSimple} />
          <span className="sidebar-title">Progress</span>
        </div>
      </Link>
      <div className="sidebar-box">
        <div className="sidebar-info">
          <FontAwesomeIcon icon={faGear} />
          <span className="sidebar-title">Settings</span>
        </div>
      </div>
      <button
        className="sidebar-box"
        onClick={() => {
          authDispatch({
            type: "LOGIN",
            login: false,
            token: localStorage.removeItem("token"),
          });
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
