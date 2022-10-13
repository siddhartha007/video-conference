import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './components/Dashboard';
import { AuthContext } from './components/UserAuth';
import {BrowserRouter,Routes,Route} from 'react-dom'
import Auth from './components/Auth'
function App() {
  const [token, setToken] = React.useState(null);
 
  return (
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Auth />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
