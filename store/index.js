export const state = () => ({
  dynamicPagesData: {}
})

export const mutations = {
  setDynamicPagesData (state, dynamicPagesData) {
    state.dynamicPagesData = { [this.$router.currentRoute.params.page]: dynamicPagesData }
  }
}

export const actions = {
  async fetch ({ commit, state }) {
    if (!state.dynamicPagesData[this.$router.currentRoute.params.page]) {
      const data = await this.$strapi.$pages.find({ slug: this.$router.currentRoute.params.page })
      commit('setDynamicPagesData', data[0])
    }
  }
}

export const getters = {
  dynamicPagesData: state => state.dynamicPagesData
}
