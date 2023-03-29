import { LOGIN_USER, LOGOUT_USER } from '../constants/userConstants'
import axios from 'axios'

export const setReduxUserState = (userCreated) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: userCreated
    })
}

export const logout = () => (dispatch) => {
    try {
      document.location.href = "/login";
      axios.get('/api/logout');
      localStorage.removeItem("userInfo");
      sessionStorage.removeItem("userInfo");
      localStorage.removeItem("cart");
      dispatch({ type: LOGOUT_USER });
      console.log("Logout successful");
    } catch (error) {
      console.error("Error in logout action:", error);
    }
  };
  