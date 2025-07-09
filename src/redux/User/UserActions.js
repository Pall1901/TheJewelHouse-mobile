import {
  LOGIN_USER,
} from './UserTypes';


// const logOutUser = async (refreshToken, dispatch) => {
  
// };

const loginUser = user => ({
  type: LOGIN_USER,
  payload: { user },
});


export {
  loginUser
};

