import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ColorBox.css"
import { faCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

const Colorbox = ({colors, close, toggle, habit, setData, setCloseModal}) => {
   
    return (
        <div className='color-box' style={close ? {"display": "block" } : {"display" : "none"}}>
            <span className="color-box-close" onClick={() => toggle()}>
                <FontAwesomeIcon icon={faXmark}  />
            </span>
            <div className="color-boxes">
            {colors.map((color) => {
                return (
                <span className="color-code" onClick={() => {
                    setData({type:"HABITS" ,dateCreate:habit.dateAdded, name:habit.name, iconName:habit.icon ,color:color})
                    console.log(habit)
                    setCloseModal()
                    }}>
                    <FontAwesomeIcon icon={faCircle} className="color" style={{color:color}} />
                </span>
                )
            })}
            </div>
        </div>
    );
}

export default Colorbox;
