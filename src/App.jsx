import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import DesarrolloWeb from './components/DesarrolloWeb/DesarrolloWeb';
import { TopButton } from './components/TopButton/TopButton';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
     <Router>
      <Header />
      <Routes>
       <Route path='/' element={<Bio/>}  />
       <Route path="/desarrollo" element={<DesarrolloWeb />} />
      </Routes>
      <TopButton/>
    </Router>
      
    </>
  )
}

export default App
