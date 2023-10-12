import Daydate from "../../Components/Daydate/Daydate";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useData } from "../../Contexts/DataContext/DataContext";
import useClose from "../../Hooks/useClose";
import './Habit.css';


const Habit = () => {
    const {data, setData} = useData()
    const [openModal, setCloseModal] = useClose()
    const month = new Date().getMonth()
    const year = new Date().getFullYear()
    function getDaysInMonth(month, year) {
        const date = new Date(year, month, 1);
        let days = [];
    
     
        while (date.getMonth() === month) {
          days.push({ 
                   day : new Date(date).getDate(), 
                   dayName : new Date(date).toLocaleDateString('en-US',{weekday: 'short'}), 
                   month: date.toLocaleString('default', { month: 'short' }),
                   dateString: `${String(month + 1).padStart(2,'0')}/${String(new Date(date).getDate()).padStart(2,'0')}/${year}`
                });
          date.setDate(date.getDate() + 1);
        }
        return days;
    }
    const result = getDaysInMonth(month, year)       
    return (
        <div className="habit">
            <Sidebar setCloseModal={setCloseModal} setData={setData} />
            <Daydate dates={result} colors={data.colors} icons={data.habitIcons} habits={data.habits} openModal={openModal} setCloseModal={setCloseModal} month={month} setData={setData} habit={data.habit} isEdit={data.isEdit} dateAdded={data.dateAdded}/>
        </div>
    );
};



export default Habit;
