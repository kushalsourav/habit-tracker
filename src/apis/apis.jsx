import axios from "axios"

export const getHabits = async (token, setData) => {
  await axios.get("http://localhost:8000/user/habits/", {headers: {Authorization:token}}).then((res) => {
   if(res.data.success === true) {
    setData({type:"GET_HABITS", habits: res.data.habits})
   }
  })
}

export const postHabits = async (habit,token, setData) => {
  console.log(habit)
  await axios.post("http://localhost:8000/user/habits/", habit , {headers:{Authorization:token}}).then((res) => {
    if(res.data.success === true) {
      console.log(res.data)
      getHabits(token,setData)
      setData({type:"HABITS" ,dateCreate:"", name:"", iconName:"" ,color:""})
      
    }
  })
}

export const updateHabits = async (habitId, habit,token, setData) => {
  await axios.post(`http://localhost:8000/users/habit/update/${habitId}`, habit, {headers:{Authorization:token}}).then((res) => {
    console.log(res)
    getHabits(token,setData)
    setData({type:"EDIT" ,edit:false, editId:""})
  })
}

export const deleteHabits = async (habitId,token, setData) => {

  await axios.post(`http://localhost:8000/users/habit/delete/${habitId}`, null, {headers:{Authorization:token}}).then((res) => {
    if(res.data.success === true) {
      console.log(res.data)
      getHabits(token,setData)
      
    }
  })
}

