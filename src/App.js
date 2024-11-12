import './App.css';
import { Routes, Route } from 'react-router-dom'
import BoxingPage from './pages/BoxingPage.js'
import FullGear from './components/FullGear.js'
import JitsuPage from './pages/JitsuPage.js'
import ThaiPage from './pages/ThaiPage.js'
import Nav from './components/Nav.js'
import IndivGear from './components/IndivGear'


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
      </Routes>
    </div>
  );
}

export default App;
