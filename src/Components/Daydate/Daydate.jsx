import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import eyes from '../../Assets/img/game.png';
import './Daydate.css'
import HabitRow from '../HabitRow/HabitRow';
import TextEditor from '../TextEditor/TextEditor';
const Daydate = ({dates, colors, icons, habits,openModal, setCloseModal, setData, habit, isEdit, dateAdded}) => {
   console.log(dates)
    return (
        <div className="calender">
            <h2 className='calender-header'>Hello, AshBorn 😊</h2>
            <span className='calender-month'>{dates[0].month}</span>
            <div className="day-list">
            {
               dates.map((day) => {
                return(
                <div className="days" onClick={() => {
                    setData({type:"DATE_ADDED", dateAdded:habit.dateAdded})
                    setData({type:"HABITS" ,dateCreate:day.dateString, name:habit.name, iconName:habit.icon ,color:habit.colorCode})}}>
                    <span className="day-name">{
                        day.dayName.slice(0,-1)
                    }</span>
                    <span className="day-date">{day.day}</span>
                </div>
                )
               })
            }
            </div>
           <HabitRow habits={habits} setData={setData} setCloseModal={setCloseModal} dateAdded={dateAdded} />
           <TextEditor colors={colors} icons={icons}  setCloseModal={setCloseModal} 
           openModal={openModal} setData={setData} habit={habit} isEdit={isEdit} />
        </div>
    );
};




export default Daydate;
