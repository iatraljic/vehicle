import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import ContextlProvider from './context'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ContextlProvider>
      <App />
    </ContextlProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
