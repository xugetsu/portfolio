import React, { Component } from 'react';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
import NavBar from './Components/NavBar/NavBar';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import GitMyCareer from './Components/GitMyCareer/GitMyCareer';
import CustomScrollbars from './Components/UI/CustomScrollbars/CustomScrollbars';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CustomScrollbars scrollId={0} width = {'100vw'} height = {'100vh'} zIndex={3} >
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
