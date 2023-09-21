import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import eyes from '../../Assets/img/game.png';
import './Daydate.css'
const Daydate = ({dates}) => {
    return (
        <div className="calender">
            <h2 className='calender-header'>Hello, AshBorn 😊</h2>
            <div className="day-list">
            {
               dates.map((day) => {
                return(
                <div className="days">
                    <span className="day-name">{
                        day.dayName.slice(0,-1)
                    }</span>
                    <span className="day-date">{day.day}</span>
                </div>
                )
               })
            }
            </div>
            <div className="habit-card">
                <div className="habit-board">
                    <h3 className='heading-tertiary'>Add your first goal</h3>
                    <button className='btn-cta'>
                    <FontAwesomeIcon icon={faPlus} />
                    New Goal</button>
                </div>
                <div>
                    <img src={eyes} alt="" className='board-img'/>
                </div>
            </div>
        </div>
    );
};




export default Daydate;
