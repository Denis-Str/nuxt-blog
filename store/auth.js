export const state = () => ({
  token: true,
  user: {},
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, data) {
    state.user = data;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
  },
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("mock-token"), 500);
      });
      dispatch("addToken", token);
      // await new Promise((resolve, reject) => {
      //   setTimeout(() => reject("error"), 500);
      // });
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
    }
  },
  createdUser({ commit }, formData) {
    try {
      console.log("user created", formData);
      commit("SET_USER", formData);
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
    }
  },
  addToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  logout({ commit }) {
    commit("CLEAR_TOKEN");
  },
};

export const getters = {
  isAuth: (state) => Boolean(state.token),
};
