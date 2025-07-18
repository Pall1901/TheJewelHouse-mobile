import {
  LOGIN_USER,
  SET_LOGIN_LOADER,
  RESET_USER
} from './UserTypes';


// const logOutUser = async (refreshToken, dispatch) => {
  
// };

const setLoader = loader => ({
  type: SET_LOGIN_LOADER,
  payload: { loader },
});

const loginUser = user => ({
  type: LOGIN_USER,
  payload: { user },
});
const resetUser = () => ({
  type: RESET_USER,
});


export {
  loginUser,
  setLoader,
  resetUser
};

