import Daydate from "../../Components/Daydate/Daydate";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Habit.css'


const Habit = () => {
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
          days.push({ day : new Date(date).getDate(), dayName : new Date(date).toLocaleDateString('en-US',{weekday: 'short'})});
          date.setDate(date.getDate() + 1);
        }
        return days;
    }
    const result = getDaysInMonth(month, year)
    console.log(result)
    return (
        <div className="habit">
            <Sidebar />
            <Daydate dates={result} />
        </div>
    );
};



export default Habit;
