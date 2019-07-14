import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.less'
import './index.less'
import store from './store.js'
const { Provider } = mobxReact

// initialize window variables
window._ = _
window.moment = moment

// initialize application info
utils.info.title = `Web实时监控管理系统(v1.0)`
document.title = utils.info.title

// init mobx store

// mount react dom
ReactDOM.render(
  <Provider store={store}>
    <rrdm.HashRouter>
      <App />
    </rrdm.HashRouter>
  </Provider>,
	document.querySelector('#root')
)
