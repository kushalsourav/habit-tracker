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
    icon: "",
    colorCode: "",
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

    const doPostOrUpdateHabit = (edit, ) => {
         if(!edit) {
             // post
         } else {
          //update id, habit
         }
    }

    useEffect(() => {
      getHabits(token, setData);
    },[token, setData])
      return(
        <DataContext.Provider value={{data, setData}} >
            {children}
        </DataContext.Provider>
      )
}

export {DataProvider, useData}