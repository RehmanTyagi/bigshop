import './Styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import store from './Store/Store'

// Providers
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
