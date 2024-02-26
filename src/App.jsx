import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import DesarrolloWeb from './components/DesarrolloWeb/DesarrolloWeb';
import { TopButton } from './components/TopButton/TopButton';
import DevSecOPs from './components/DevSecOps/DevSecOPs';
import Scripting from './components/Scripting/Scripting';
import CyberSecurity from './components/CyberSecurity/CyberSecurity';
import Testing from './components/Testing/Testing';
import DataBase from './components/Dtb/DataBase';
import Hardware from './components/Hardware/Hardware';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
     <Router>
      <Header />
      <Routes>
       <Route path='/' element={<Bio/>}  />
       <Route path="/desarrollo" element={<DesarrolloWeb />} />
       <Route path="/scripting" element={<Scripting />} />
       <Route path="/devsecops" element={<DevSecOPs />} />
       <Route path="/security" element={<CyberSecurity/>} />
       <Route path="/testing" element={<Testing/>} />
       <Route path="/database" element={<DataBase/>} />
       <Route path="/hardware" element={<Hardware/>} />
      </Routes>
      <TopButton/>
    </Router>
    <Footer/>
    </>
  )
}

export default App
