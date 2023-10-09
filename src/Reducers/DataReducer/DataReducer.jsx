const DataReducer = (state, action) => {
    switch (action.type) {
        case "GET_HABITS" :
            return {...state, habits: action.habits}
        case "HABITS": 
            return {...state, habit: {...state.habit, name:action.name, dateAdded: action.dateCreate, icon:action.iconName, colorCode: action.color} }
        case "MODAL":
            return {...state, modal:action.modal}
        case "EDIT" :
            return {...state, isEdit: {...state.isEdit, editId : action.editId, edit:action.edit}}
        case "DATE_ADDED":
             return {...state, dateAdded : action.dateAdded}
        default :
            return state;
    }
 
}

export default DataReducer;
