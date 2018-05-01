import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
import NavBar from './Components/NavBar/NavBar';
import Modules from './Components/modules/Modules';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import GitMyCareer from './Components/GitMyCareer/GitMyCareer';
import CustomScrollbars from './Components/UI/CustomScrollbars/CustomScrollbars';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
         <CustomScrollbars height = {window.innerHeight }>
            <NavBar />
            <GeneralInfo />
            <GitMyCareer />
            <BannerLogo />
        </CustomScrollbars>
      </div>
    );
  }
}

export default App;
