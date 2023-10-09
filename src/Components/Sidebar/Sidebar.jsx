import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartSimple,faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({setCloseModal}) => {
    const location = useLocation()
    return (
        <div className="sidebar">
            <h3 className="sidebar-head">Be Better</h3>
            <Link to="/Habit" className="sidebar-box">
                <div className="sidebar-info">
                 <FontAwesomeIcon icon={faHome} />
                 <span className="sidebar-title">Today</span>
                </div>
                <span className="sidebar-add" onClick={() => {
                    location.pathname === '/Habit' && setCloseModal()
                }} >
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
        </div>
    );
}

export default Sidebar;
