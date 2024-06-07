import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './component/Header'
import Footer from './component/Footer'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
            <Route path='/HomePage' element={<HomePage />}/>
            <Route path='/RegisterPage' element={<RegisterPage />}/>
        </Routes>
      <Footer />
    </Router>   
  )
}

export default App