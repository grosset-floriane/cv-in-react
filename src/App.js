import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';
import { ThemeProvider } from "styled-components";
import CodingLightTheme from "./components/styles/CodingLightTheme";

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={CodingLightTheme}>
        <Header />
        <MainContent />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;