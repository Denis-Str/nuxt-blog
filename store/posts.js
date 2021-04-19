const posts = [
  {
    title: "Post 1",
    date: new Date(),
    views: 10,
    comments: [1, 2],
    id: 1,
  },
  {
    title: "Post 2",
    date: new Date(),
    views: 10,
    comments: [1, 2],
    id: 2,
  },
  {
    title: "Post 3",
    date: new Date(),
    views: 10,
    comments: [1, 2],
    id: 3,
  },
  {
    title: "Post 4",
    date: new Date(),
    views: 10,
    comments: [1, 2],
    id: 4,
  },
];

export const actions = {
  async fetchAdminList({ commit }) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async removePosts({ commit }, id) {
    await console.log("delete post", id);
  },
  async fetchSinglePostById({ commit }, id) {
    console.log(id);

    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts[id - 1]);
      }, 1000);
    });
  },
  async upDataPost({ commit }, { title, text, id }) {
    await console.log(title, text, id);
  },
  async createPost({ commit }, { title, text, img }) {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("text", text);
      formData.append("image", img, img.name);

      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(formData);
        }, 1000);
      });
    } catch (e) {
      commit("SET_ERROR", e, { root: true });
      throw e;
    }
  },
};
