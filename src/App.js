import React, { Component } from 'react';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
import NavBar from './Components/NavBar/NavBar';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import GitMyCareer from './Components/GitMyCareer/GitMyCareer';
import Portfolio from './Components/Portfolio/Portfolio';
import Scrollbar from './Components/UI/CustomScrollbars/Scrollbar';
import Contact from './Components/Contact/Contact';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Scrollbar scrollId={0} width = {'100vw'} height = {'100vh'} zIndex={11} >
            <GeneralInfo />
            <GitMyCareer />
            <BannerLogo />
            <Portfolio />
            <Contact />
        </Scrollbar>
      </div>
    );
  }
}

export default App;
