import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// initialize window variables
window._ = _
window.moment = moment

// mount react dom
ReactDOM.render(
  <rrdm.BrowserRouter>
    <App />
  </rrdm.BrowserRouter>,
	document.querySelector('#root')
)
