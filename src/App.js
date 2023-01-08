// jshint esversion:6
import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';


function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    return children
  };

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute> 
          }
          />
          <Route path='login' element={<Login />} /> 
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
