export const getters = {
  USER: state => state.user,
  USER_TOKEN: state => state.user.token,
  USER_FULL_NAME: state => state.user.fullname,
  GET_IS_AUTH: state => state.user.is_auth,
  GET_USER_ROLE: state => state.user.role
};
