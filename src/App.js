import React from 'react';
import Header from './components/Header';
import CvPage from './pages/CvPage.js';
import Footer from './components/Footer';
import './index.css';
import { ThemeProvider } from "styled-components";
import CodingLightTheme from "./components/styles/CodingLightTheme";

const currentTheme = CodingLightTheme;

class App extends React.Component {
  
  


  render() {
    return(
      <ThemeProvider theme={currentTheme}>
        <Header />
        <CvPage />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;