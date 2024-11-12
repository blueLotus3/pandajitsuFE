import './App.css';
import { Routes, Route } from 'react-router-dom'
import BoxingPage from './pages/BoxingPages.js'
import FullGear from './components/FullGear.js'
import JitsuGear from './components/JitsuGear.js'
import ThaiGear from './components/ThaiGear.js'
import Nav from './components/Nav.js'
import IndivGear from './components/IndivGear'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<FullGear/>} />
        <Route path='/details/:id' element={<IndivGear />} />
        <Route path='/boxing' element={<BoxingPage/>} />
        <Route path='/jiujitsu' element={<JitsuGear/>} />
        <Route path='/muaythai' element={<ThaiGear/>} />
      </Routes>
    </div>
  );
}

export default App;
