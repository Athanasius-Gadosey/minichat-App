// jshint esversion:6
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Login /> }/>
      <Route path='/' element={ <Register /> } /> 
      <Route path='/' element={ <Home /> } />
    </Routes>

    </div>
  );
}

export default App;
