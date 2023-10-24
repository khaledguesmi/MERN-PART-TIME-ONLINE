
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import MainBooks from './components/MainBooks';
import CreateBook from './components/CreateBook';
import Details from './components/Details';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "#103f6e", color: "#ffffff", paddingTop: "30px", height: "100px" }}>Welcome to library management</h1>


      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mainbooks' element={< MainBooks />} />
        <Route path='/new' element={<CreateBook />} />
        <Route path='/edit/:id' element={<UpdateBook />} />
        <Route path='/details/:id' element={< Details />} />
        <Route path="*" element={<Navigate to="/Register" replace />} />
      </Routes>
    </div>
  );
}

export default App;
