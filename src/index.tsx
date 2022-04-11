import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App'
import { setupStore } from "./redux/store"

const store = setupStore()
const container: any = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
