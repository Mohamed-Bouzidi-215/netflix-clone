import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {

  const user = null;

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // logged in
        console.log(userAuth);
      } else {
        // logged out
      }
      })

    return unsuscribe;
    }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
