

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import Dashboard from './component/Dashboard';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

      <Routes>
        <Route
          path='/'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>

          } />
      </Routes>


  )
}

export default App