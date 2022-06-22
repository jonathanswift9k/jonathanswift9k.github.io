import React from 'react'
import ReactDom from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css'
import App from './App'

const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<App />)