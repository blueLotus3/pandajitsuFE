import './App.css';
import { Routes, Route } from 'react-router-dom'
import FullGear from './components/FullGear.js'
import Nav from './components/Nav.js'
import IndivGear from './components/IndivGear'
import BoxingPage from './pages/BoxingPage.js'
import JitsuPage from './pages/JitsuPage.js'
import ThaiPage from './pages/ThaiPage.js'
import CartPage from './pages/CartPage'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<FullGear/>} />
        <Route path='/details/:id' element={<IndivGear />} />
        <Route path='/boxing' element={<BoxingPage />} />
        <Route path='/jiujitsu' element={<JitsuPage />} />
        <Route path='/muaythai' element={<ThaiPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
