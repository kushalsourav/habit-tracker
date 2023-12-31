import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HabitRow.css";
import {
  faTrash,
  faPencil,
  faPlus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { deleteHabits, postGoals } from "../../apis/apis";
import eyes from "../../Assets/img/game.png";

const HabitRow = ({ habits, setData, setCloseModal, dateAdded, currDate }) => {
  const token = localStorage.getItem("token");
  let filterbyDate = habits.filter((habit) => habit.dateAdded === dateAdded);
  let currDay = currDate.split("/")[1];
  let selDay = dateAdded.split("/")[1];
  let result = selDay - currDay;
  return (
    <div className="habit-container">
      {filterbyDate.length === 0 && result <= 0 && <h3>no data</h3>}
      {filterbyDate.length === 0 && result >= 0 ? (
        <div className="habit-card">
          <div className="habit-board">
            <h3 className="heading-tertiary">Add your first goal</h3>
            <button
              className="btn-cta"
              onClick={() => {
                setCloseModal();
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              New Goal
            </button>
          </div>
          <div>
            <img src={eyes} alt="" className="board-img" />
          </div>
        </div>
      ) : (
        filterbyDate.map((habit) => {
          console.log(habit);
          console.log(habit.icon);
          return (
            <div className="habit-row">
              <div className="habit-title">
                <span className="habit-icon">
                  <FontAwesomeIcon
                    icon={Icons[habit.icon]}
                    style={{ color: habit.colorCode }}
                  />
                </span>
                <p className="habit-name">{habit.name}</p>
              </div>
              <div>
                <button
                  className="habit-kebab"
                  onClick={() => {
                    postGoals(habit, token, setData);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: habit.colorCode }}
                  />
                </button>
                <button
                  className="habit-kebab"
                  onClick={() => {
                    setCloseModal();
                    setData({
                      type: "HABITS",
                      dateCreate: habit.dateAdded,
                      name: habit.name,
                      iconName: habit.icon,
                      color: habit.colorCode,
                    });
                    setData({
                      type: "EDIT",
                      edit: true,
                      editId: habit._id,
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ color: habit.colorCode }}
                  />
                </button>
                <button
                  className="habit-kebab"
                  onClick={() => {
                    deleteHabits(habit._id, token, setData);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: habit.colorCode }}
                  />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HabitRow;
