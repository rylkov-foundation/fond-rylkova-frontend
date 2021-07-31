export const state = () => ({
  menu: [],
  globalMeta: {},
  dynamicPagesData: {},
  index: {},
  mission: {},
  annualReports: {},
  contacts: {},
  projects: {},
  team: {},
  whoIsAndreiRylkov: {},
  donation: {},
  donationAmount: {},
  footer: {},
  popupCookies: {},
  popupDownload: {},
  popupNews: {},
  wasNavigate: false,
  isScrollOver230: false
})

export const mutations = {
  setDynamicPagesData (state, data) {
    state.dynamicPagesData = { ...state.dynamicPagesData, [data.page]: data.data }
  },
  setGlobalMeta (state, data) {
    state.globalMeta = data
  },
  setMenu (state, menuData) {
    state.menu = menuData
  },
  setIndex (state, data) {
    state.index = data
  },
  setMission (state, data) {
    state.mission = data
  },
  setAnnualReports (state, data) {
    state.annualReports = data
  },
  setContacts (state, data) {
    state.contacts = data
  },
  setProjects (state, data) {
    state.projects = data
  },
  setTeam (state, data) {
    state.team = data
  },
  setWhoIsAndreiRylkov (state, data) {
    state.whoIsAndreiRylkov = data
  },
  setDonation (state, data) {
    state.donation = data
  },
  setDonationAmount (state, data) {
    state.donationAmount = data
  },
  setFooter (state, data) {
    state.footer = data
  },
  setPopupCookies (state, data) {
    state.popupCookies = data
  },
  setPopupDownload (state, data) {
    state.popupDownload = data
  },
  setPopupNews (state, data) {
    state.popupNews = data
  },
  setWasNavigate (state, data) {
    state.wasNavigate = data
  },
  setIsScrollOver230 (state, data) {
    state.isScrollOver230 = data
  }
}

export const actions = {
  async nuxtServerInit ({ getters, dispatch }) {
    if (!getters.menu.length) {
      await dispatch('menuInit')
    }
    if (!Object.keys(getters.footer).length) {
      await dispatch('footerInit')
    }
    if (!Object.keys(getters.globalMeta).length) {
      await dispatch('globalMetaInit')
    }
    if (!Object.keys(getters.popupCookies).length) {
      await dispatch('popupCookiesInit')
    }
    if (!Object.keys(getters.popupDownload).length) {
      await dispatch('popupDownloadInit')
    }
    if (!Object.keys(getters.popupNews).length) {
      await dispatch('popupNewsInit')
    }
  },
  async dynamicPagesDataInit ({ commit, getters }, page) {
    const data = await this.$strapi.$pages.find({ slug: page })
    commit('setDynamicPagesData', { page, data: data[0] })
  },
  async menuInit ({ commit }) {
    const data = await this.$strapi.$http.get('/menu/items')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return res.json().then(res => Promise.reject(res))
      })
    commit('setMenu', data)
  },
  async globalMetaInit ({ commit }) {
    const data = await this.$strapi.$meta.find()
    commit('setGlobalMeta', data)
  },
  async indexInit ({ commit }) {
    const data = await this.$strapi.$index.find()
    commit('setIndex', data)
  },
  async missionInit ({ commit }) {
    const data = await this.$strapi.$mission.find()
    commit('setMission', data)
  },
  async annualReportsInit ({ commit }) {
    const data = await this.$strapi.$annual_reports.find()
    commit('setAnnualReports', data)
  },
  async contactsInit ({ commit }) {
    const data = await this.$strapi.$contacts.find()
    commit('setContacts', data)
  },
  async projectsInit ({ commit }) {
    const data = await this.$strapi.$projects.find()
    commit('setProjects', data)
  },
  async teamInit ({ commit }) {
    const data = await this.$strapi.$team.find()
    commit('setTeam', data)
  },
  async whoIsAndreiRylkovInit ({ commit }) {
    const data = await this.$strapi.$who_is_andrei_rylkov.find()
    commit('setWhoIsAndreiRylkov', data)
  },
  async donationInit ({ commit }) {
    const data = await this.$strapi.$donation_page.find()
    commit('setDonation', data)
  },
  async donationAmountInit ({ commit }) {
    try {
      const data = await this.$strapi.$donation_amount.find()
      commit('setDonationAmount', data)
    } catch (e) {
      commit('setDonationAmount', { amount_small: 50, amount_medium: 200, amount_big: 500 })
    }
  },
  async footerInit ({ commit }) {
    const data = await this.$strapi.$footer.find()
    commit('setFooter', data)
  },
  async popupCookiesInit ({ commit }) {
    const data = await this.$strapi.$popup_cookies.find()
    commit('setPopupCookies', data)
  },
  async popupDownloadInit ({ commit }) {
    const data = await this.$strapi.$popup_download.find()
    commit('setPopupDownload', data)
  },
  async popupNewsInit ({ commit }) {
    const data = await this.$strapi.$popup_news.find()
    commit('setPopupNews', data)
  },
  setWasNavigate ({ commit }, data) {
    commit('setWasNavigate', data)
  },
  setIsScrollOver230 ({ commit }, data) {
    commit('setIsScrollOver230', data)
  }
}

export const getters = {
  globalMeta: state => state.globalMeta,
  menu: state => state.menu,
  dynamicPagesData: state => state.dynamicPagesData,
  index: state => state.index,
  mission: state => state.mission,
  annualReports: state => state.annualReports,
  contacts: state => state.contacts,
  projects: state => state.projects,
  team: state => state.team,
  whoIsAndreiRylkov: state => state.whoIsAndreiRylkov,
  donation: state => state.donation,
  donationAmount: state => state.donationAmount,
  footer: state => state.footer,
  popupCookies: state => state.popupCookies,
  popupDownload: state => state.popupDownload,
  popupNews: state => state.popupNews,
  wasNavigate: state => state.wasNavigate,
  isScrollOver230: state => state.isScrollOver230
}
