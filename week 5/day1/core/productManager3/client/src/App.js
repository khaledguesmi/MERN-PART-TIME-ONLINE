
import './App.css';
import EditProduct from './Components/EditProduct';
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
        <Route path="api/products/edit/:id" element={ <EditProduct/> } />
        <Route path="*" element={ <h1>NOT Found</h1> } />

      </Routes>
    </div>
  );
}

export default App;
