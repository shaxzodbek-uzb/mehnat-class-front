export const mutations = {
  SET_ID: (state, id) => (state.user.id = id),
  SET_FULL_NAME: (state, fullname) => (state.user.fullname = fullname),
  SET_USER: (state, user) => {
    state.user.id = user.id;
    state.user.kadrlar_user_id = user.kadrlar_user_id;
    state.user.fullname = user.fullname;
    state.user.region_id = user.region_id;
    state.user.city_id = user.city_id;
  },
  SET_USER_TOKEN: (state, token) => (state.user.token = token),
  SET_IS_AUTH: (state, condition) => (state.user.is_auth = condition),
  SET_USER_ROLE: (state, role) => (state.user.role = role)
};
