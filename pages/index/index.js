import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'

// initialize window variables
window._ = _
window.moment = moment

// init mobx store

// mount react dom
ReactDOM.render(
  <rrdm.HashRouter>
    <App />
  </rrdm.HashRouter>,
	document.querySelector('#root')
)
