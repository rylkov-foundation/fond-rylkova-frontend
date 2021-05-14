export const state = () => ({
  notFound: false,
  menu: [],
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
  setMenu (state, menuData) {
    state.menu = menuData
  },
  setNotFound (state, isPageExist) {
    state.notFound = !isPageExist
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
  async dynamicPagesDataInit ({ commit, state }) {
    if (
      !state.dynamicPagesData[this.$router.currentRoute.params.page] ||
      !Object.keys(state.dynamicPagesData[this.$router.currentRoute.params.page]).length
    ) {
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
  },
  async indexInit ({ commit, state }) {
    if (!Object.keys(state.index).length) {
      const data = await this.$strapi.$index.find()
      commit('setIndex', data)
    }
  },
  async missionInit ({ commit, state }) {
    if (!Object.keys(state.mission).length) {
      const data = await this.$strapi.$mission.find()
      commit('setMission', data)
    }
  },
  async annualReportsInit ({ commit, state }) {
    if (!Object.keys(state.annualReports).length) {
      const data = await this.$strapi.$annual_reports.find()
      commit('setAnnualReports', data)
    }
  },
  async contactsInit ({ commit, state }) {
    if (!Object.keys(state.contacts).length) {
      const data = await this.$strapi.$contacts.find()
      commit('setContacts', data)
    }
  },
  async projectsInit ({ commit, state }) {
    if (!Object.keys(state.projects).length) {
      const data = await this.$strapi.$projects.find()
      commit('setProjects', data)
    }
  },
  async teamInit ({ commit, state }) {
    if (!Object.keys(state.team).length) {
      const data = await this.$strapi.$team.find()
      commit('setTeam', data)
    }
  },
  async whoIsAndreiRylkovInit ({ commit, state }) {
    if (!Object.keys(state.whoIsAndreiRylkov).length) {
      const data = await this.$strapi.$who_is_andrei_rylkov.find()
      commit('setWhoIsAndreiRylkov', data)
    }
  },
  async donationInit ({ commit, state }) {
    if (!Object.keys(state.donation).length) {
      const data = await this.$strapi.$donation_page.find()
      commit('setDonation', data)
    }
  },
  async donationAmountInit ({ commit, state }) {
    if (!Object.keys(state.donationAmount).length) {
      const data = await this.$strapi.$donation_amount.find()
      commit('setDonationAmount', data)
    }
  },
  async footerInit ({ commit, state }) {
    if (!Object.keys(state.footer).length) {
      const data = await this.$strapi.$footer.find()
      commit('setFooter', data)
    }
  }
}

export const getters = {
  notFound: state => state.notFound,
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
