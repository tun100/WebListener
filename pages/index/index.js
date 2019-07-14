import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.less'
import '../../less/theme.less'
import './index.less'
import store from './store.js'
const { Provider } = mobxReact

// initialize window variables
window._ = _
window.moment = moment
window.STORE = store
window.utils = utils
window.enterdevmode = () => {
  localStorage.setItem('DEV_MODE', 'yes')
}

// initialize application info
utils.store = store
utils.info.title = `Web实时监控管理系统(v1.0)`
utils.info.user = 'admin'
utils.info.password = '123456'
document.title = utils.info.title

// execute task in dev mode
if (utils.isdev()) {
  store.action_login({
    username: utils.info.user,
    password: utils.info.password
  })
}

// mount react dom
ReactDOM.render(
  <Provider store={store}>
    <rrdm.HashRouter>
      <App />
    </rrdm.HashRouter>
  </Provider>,
	document.querySelector('#root')
)
