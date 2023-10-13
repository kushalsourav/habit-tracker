import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TextEditor.css";
import {
  faCircle,
  faGripVertical,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import Colorbox from "../ColorBox/Colorbox";
import IconBox from "../IconBox/IconBox";
import useClose from "../../Hooks/useClose";
import Modal from "../Modal/Modal";
import { postHabits, updateHabits } from "../../apis/apis";

const TextEditor = ({
  colors,
  icons,
  openModal,
  setCloseModal,
  setData,
  habit,
  isEdit,
}) => {
  const [closeIcon, setCloseIcon] = useClose();
  const [closeColor, setCloseColor] = useClose();
  const token = localStorage.getItem("token");
  console.log(habit);
  return (
    <Modal
      openModal={openModal}
      setCloseModal={setCloseModal}
      setData={setData}
    >
      <div className="texteditor">
        <div className="texteditor-header">
          <span
            className="texteditor-header-button"
            onClick={() => setCloseIcon()}
          >
            <FontAwesomeIcon
              icon={Icons[habit.icon]}
              style={{ color: habit.colorCode }}
            />
            <span className="texteditor-header-text">icon</span>
          </span>
          <span
            className="texteditor-header-button"
            onClick={() => setCloseColor()}
          >
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: habit.colorCode }}
            />
            <span className="texteditor-header-text">color</span>
          </span>
        </div>
        <div className="texteditor-body">
          <textarea
            name="model-text"
            id="model-textarea"
            className="texteditor-body-input"
            cols="30"
            rows="10"
            placeholder="Add Text"
            value={habit.name}
            onChange={(e) => {
              setData({
                type: "HABITS",
                dateCreate: habit.dateAdded,
                name: e.target.value,
                iconName: habit.icon,
                color: habit.colorCode,
              });
              setData({ type: "DATE_ADDED", dateAdded: habit.dateAdded });
            }}
          ></textarea>
        </div>
        <div className="texteditor-footer">
          <button className="texteditor-left texteditor-header-button">
            <FontAwesomeIcon icon={faRepeat} style={{ color: "#15AD70" }} />
            repeat everyday
          </button>
          <button
            className="texteditor-right texteditor-header-button"
            onClick={() => {
              isEdit.edit
                ? updateHabits(isEdit.editId, habit, token, setData)
                : postHabits(habit, token, setData);
              setCloseModal();
            }}
          >
            save
          </button>
        </div>
        <IconBox
          icons={icons}
          toggle={setCloseIcon}
          close={closeIcon}
          setData={setData}
          habit={habit}
          setCloseModal={setCloseIcon}
        />
        <Colorbox
          colors={colors}
          toggle={setCloseColor}
          close={closeColor}
          setData={setData}
          habit={habit}
          setCloseModal={setCloseColor}
        />
      </div>
    </Modal>
  );
};

export default TextEditor;
