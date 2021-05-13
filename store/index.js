export const state = () => ({
  menu: [],
  dynamicPagesData: {},
  notFound: false
})

export const mutations = {
  setDynamicPagesData (state, dynamicPagesData) {
    state.dynamicPagesData = { [this.$router.currentRoute.params.page]: dynamicPagesData }
  },
  setMenu (state, menuData) {
    state.menu = menuData
  },
  setNotFound (state, isPageExist) {
    state.notFound = !isPageExist
  }
}

export const actions = {
  async dynamicPagesDataInit ({ commit, state }) {
    if (!state.dynamicPagesData[this.$router.currentRoute.params.page]) {
      const data = await this.$strapi.$pages.find({ slug: this.$router.currentRoute.params.page })
      if (!data.length) {
        commit('setNotFound', false)
      } else {
        commit('setDynamicPagesData', data[0])
      }
    }
  },
  async menuInit ({ commit, state }) {
    if (!state.menu.length) {
      const data = await this.$strapi.$http.get('/menu/items')
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          return res.json().then(res => Promise.reject(res))
        })
      commit('setMenu', data)
    }
  }
}

export const getters = {
  dynamicPagesData: state => state.dynamicPagesData,
  menu: state => state.menu,
  notFound: state => state.notFound
}
