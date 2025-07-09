import { LOGIN_USER } from './UserTypes';

const initial_state = {
  user: null,
  loader: false,
};

const handleLoginUser = (state, payload) => ({
  ...state,
  user: payload.user,
  loader: false,
});

const actionHandlers = {
  [LOGIN_USER]: handleLoginUser,
};

const UserReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  const handler = actionHandlers[type];
  return handler ? handler(state, payload) : state;
};

export default UserReducer;
