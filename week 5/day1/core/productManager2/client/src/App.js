
import './App.css';
import HomePage from './Components/HomePage';

import ShowOneProduct from './Components/ShowOneProduct';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <h1>Product Manager</h1>
     

     <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="api/products/:id" element={ <ShowOneProduct/> } />
      </Routes>
    </div>
  );
}

export default App;
