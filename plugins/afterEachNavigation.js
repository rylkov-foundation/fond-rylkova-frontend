export default function ({ app, store }) {
  app.router.beforeEach(
    (to, from, next) => {
      if (from.name && !store.getters.wasNavigate) {
        store.dispatch('setWasNavigate', true)
      }
      next()
    }
  )
}
