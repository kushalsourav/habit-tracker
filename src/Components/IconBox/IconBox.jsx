import "./IconBox.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import  * as Icons from "@fortawesome/free-solid-svg-icons";

const IconBox = ({icons, toggle, close, habit, setData}) => {
    return (
        <div className="icons-box" style={close ? {"display": "block" } : {"display" : "none"}}>
            <span className="icon-box-close" onClick={() => toggle()}>
                <FontAwesomeIcon icon={faXmark} />
            </span>
            <div className="icon-boxes">
                {icons.map((icon) => {
                    return (
                        <span className="icon-code" onClick={() => {
                            setData({type:"HABITS" ,dateCreate:habit.dateAdded, name:habit.name, iconName:icon ,color:habit.colorCode})}}>
                            <FontAwesomeIcon icon={Icons[icon]} style={{color:"#15AD70"}} />
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default IconBox;
