import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <BannerLogo />
      </div>
    );
  }
}

export default App;
