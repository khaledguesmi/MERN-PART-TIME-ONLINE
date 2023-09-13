import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Number } from './components/Number'
import { Home } from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/:id" element={<Number />}></Route>
    <Route path="/:id/:texte/:background" element={<Number />}></Route>
    <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
