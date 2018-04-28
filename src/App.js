import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
import NavBar from './Components/NavBar/NavBar';
import Modules from './Components/modules/Modules';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <NavBar />
        <GeneralInfo />
        <BannerLogo />
      </div>
    );
  }
}

export default App;
