import React from 'react'
import { render } from 'react-dom'
import { createStore/*, applyMiddleware*/ } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
//import thunk from 'redux-thunk'

//const middleware = [ thunk ]
const store = createStore(
  reducer
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)