
import './App.css';
import ShowAuthors from './components/ShowAuthors';
import { Route, Routes } from 'react-router-dom';
import CreateAuthors from './components/CreateAuthors';
import EditAthors from './components/EditAthors';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<ShowAuthors/>}/>
      <Route path='/new/' element={<CreateAuthors/>}/>
      <Route path='/edit/:id' element={<EditAthors/>}/>
    </Routes>
    </div>
  );
}

export default App;
