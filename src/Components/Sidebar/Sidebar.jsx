import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartSimple,faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-head">Be Better</h3>
            <div className="sidebar-box">
                <div className="sidebar-info">
                 <FontAwesomeIcon icon={faHome} />
                 <span className="sidebar-title">Today</span>
                </div>
                <span className="sidebar-add">
                <FontAwesomeIcon icon={faPlus} className="sidebar-icon" />
                </span>
             
            </div>
            <div className="sidebar-box">
                <div className="sidebar-info">
                <FontAwesomeIcon icon={faChartSimple} />
                <span className="sidebar-title">Progress</span>
                </div>
            </div>
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
