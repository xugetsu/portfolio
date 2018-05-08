import React, { Component } from 'react';
import styles from './App.css';
import BannerLogo from './Components/BannerLogo/BannerLogo';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import MyCareer from './Components/MyCareer/MyCareer';
import Portfolio from './Components/Portfolio/Portfolio';
import Layout from './Components/UI/Layout/Layout';
import Contact from './Components/Contact/Contact';
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
			<Layout>
				<GeneralInfo />
				<MyCareer />
				<BannerLogo />
				<Portfolio />
				<Contact />
			</Layout>
      </div>
    );
  }
}

export default App;
