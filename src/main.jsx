import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/poppins'; /* Defaults to 400 weight */
import "@fontsource/poppins/300.css"; /* Light weight */
import "@fontsource/poppins/600.css"; /* Bold weight */
import "@fontsource/roboto"; /* Body font */
import 'bootstrap/dist/css/bootstrap.min.css';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
