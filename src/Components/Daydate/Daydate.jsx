import "./Daydate.css";
import HabitRow from "../HabitRow/HabitRow";
import TextEditor from "../TextEditor/TextEditor";
import { useState } from "react";
const Daydate = ({
  dates,
  colors,
  icons,
  habits,
  openModal,
  setCloseModal,
  setData,
  habit,
  isEdit,
  dateAdded,
  username,
  currDate,
}) => {
  const [state, setState] = useState(dateAdded.split("/")[1]);
  console.log(state, dateAdded);

  return (
    <div className="calender">
      <h2 className="calender-header">Hello, {username} 😊</h2>
      <span className="calender-month">{dates[0].month}</span>
      <div className="day-list">
        {dates.map((day) => {
          let modDate = String(day.day).padStart(2, "0");
          return (
            <button
              className={`days   ${state === modDate ? "days-focus" : ""} `}
              onClick={() => {
                setData({ type: "DATE_ADDED", dateAdded: day.dateString });
                setState(day.dateString.split("/")[1]);
                setData({
                  type: "HABITS",
                  dateCreate: day.dateString,
                  name: habit.name,
                  iconName: habit.icon,
                  color: habit.colorCode,
                });
              }}
            >
              <span className="day-name">{day.dayName.slice(0, -1)}</span>
              <span className="day-date">{day.day}</span>
            </button>
          );
        })}
      </div>
      <HabitRow
        habits={habits}
        setData={setData}
        setCloseModal={setCloseModal}
        dateAdded={dateAdded}
        currDate={currDate}
      />
      <TextEditor
        colors={colors}
        icons={icons}
        setCloseModal={setCloseModal}
        openModal={openModal}
        setData={setData}
        habit={habit}
        isEdit={isEdit}
      />
    </div>
  );
};

export default Daydate;
