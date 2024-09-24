import './App.css';
import { Routes, Route } from 'react-router-dom'
import BoxingGear from './components/BoxingGear.js'
import FullGear from './components/FullGear.js'
import JitsuGear from './components/JitsuGear.js'
import ThaiGear from './components/ThaiGear.js'
import Nav from './components/Nav.js'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<FullGear/>} />
        <Route path='/boxing' element={<BoxingGear/>} />
        <Route path='/jiujitsu' element={<JitsuGear/>} />
        <Route path='/muaythai' element={<ThaiGear/>} />
      </Routes>
    </div>
  );
}

export default App;
