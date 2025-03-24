import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logements from './pages/Logements'
import Error from './pages/Error.jsx'
import '../src/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apropos" element={<Apropos />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
