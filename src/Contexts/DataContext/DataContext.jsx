import { createContext, useContext,  useEffect,  useReducer } from "react";
import DataReducer from "../../Reducers/DataReducer/DataReducer";
import { getHabits } from "../../apis/apis";

const initialDataState = {
    colors: ["#E15E42","F78D2C", "FFC700", "F5D4C0", "EB546F", "BF9F11", "7193ED", "#73BDE7","7193ED", "82D25D"],
    habitIcons : [
      "faRunning","faDumbbell","faBicycle","faBookReader","faGuitar","faCalendar","faCalendarAlt",
"faCalendarPlus","faCalendarMinus","faCalendarCheck","faChartBar","faChartPie","faChartLine","faAreaChart","faBarChart","faList","faListAlt","faListOl","faListUl","faCheckSquare","faRepeat","faRedo","faUndo","faUndoAlt","faRecycle","faTrophy","faMedal","faStar","faStarHalfAlt","faThumbsUp",
"faArrowUp","faArrowDown","faLevelUp","faLevelDown","faCheck","faFire","faFlame","faBolt","faFlash",
"faRocket"],
  habits: [],
  modal:false,
  habit : {
    name: "",
    dateAdded: "",
    icon: "faGripVertical",
    colorCode: "#FFC700",
  },
  isEdit : {
    editId: "",
    edit: false
  },
  dateAdded: ""
}


const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useReducer(DataReducer, initialDataState)

  

    useEffect(() => {
      getHabits(token, setData);
      const date = new Date()
      const month = date.getMonth()
      const year = date.getFullYear()
    
      let dateString = `${String(month + 1).padStart(2,'0')}/${String(new Date(date).getDate()).padStart(2,'0')}/${year}`
      setData({type:"DATE_ADDED", dateAdded:dateString})
      setData({type:"HABITS" ,dateCreate:dateString, name:data.habit.name, iconName:data.habit.icon ,color:data.habit.colorCode})
    },[token, setData])
      return(
        <DataContext.Provider value={{data, setData}} >
            {children}
        </DataContext.Provider>
      )
}

export {DataProvider, useData}