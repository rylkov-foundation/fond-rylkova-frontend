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
  footer: {}
})

export const mutations = {
  setDynamicPagesData (state, dynamicPagesData) {
    state.dynamicPagesData = { [this.$router.currentRoute.params.page]: dynamicPagesData }
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
  }
}

export const actions = {
  async dynamicPagesDataInit ({ commit }) {
    const data = await this.$strapi.$pages.find({ slug: this.$router.currentRoute.params.page })
    commit('setDynamicPagesData', data[0])
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
    const data = await this.$strapi.$donation_amount.find()
    commit('setDonationAmount', data)
  },
  async footerInit ({ commit }) {
    const data = await this.$strapi.$footer.find()
    commit('setFooter', data)
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
  footer: state => state.footer
}
