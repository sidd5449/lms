import './App.css';
import  { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dash from './pages/Dash';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='dashboard' element = {<Dash />} />
      </Routes>
    </div>
  );
}

export default App;
