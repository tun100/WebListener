const { BrowserRouter, Route, Link } = rrdm
let RouteHelper = routeMap;

export default crc({
  render () {
    return (
      <rrdm.Switch>
        {RouteHelper.getRoute('main', {
          exact: true,
          path: '/'
        })}
        {RouteHelper.getRoute('main', {
          path: '/main'
        })}
        {RouteHelper.getRoute('login', {
          path: '/login'
        })}
        <rrdm.Redirect to={{ pathname: '/login' }} />
      </rrdm.Switch>
    )
  }
})
