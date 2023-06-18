// == Import
import React from 'react';
import './HomeScreen.css';
import Nav from './Nav';
import Banner from './Banner';

// == Composant
function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />

        <Banner />

    </div>
  );
}

// == Export
export default HomeScreen;
