
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="*" element={<Inicio />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />


          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
