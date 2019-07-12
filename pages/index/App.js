const { BrowserRouter, Route, Link } = rrdm

export default crc({
  render () {
    return (
      <rrdm.Switch>
        {cpt.getRoute('main', {
          exact: true,
          path: '/'
        })}
        {cpt.getRoute('main', {
          path: '/main'
        })}
        {cpt.getRoute('login', {
          path: '/login'
        })}
        {cpt.getRoute('secure', {
          path: '/secure'
        })}
        <rrdm.Redirect to={{ pathname: '/login' }} />
      </rrdm.Switch>
    )
  }
})
