const AuthReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, [action.name]: action.input };
    case "LOGIN":
      return { ...state, login: true };
    case "SET_USER":
      return {
        ...state,
        username: action.username,
      };
    default:
      return state;
  }
};

export default AuthReducer;
