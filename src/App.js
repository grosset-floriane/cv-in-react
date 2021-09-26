import React, {useContext} from 'react';
import Header from './components/Header';
import CvPage from './pages/CvPage.js';
import Footer from './components/Footer';
import './index.css';
import { ThemeProvider } from "styled-components";
import {cvContext} from "./context/cvContext";

// const currentTheme = CodingLightTheme;

function App() {
    const {theme} = useContext(cvContext);

    return(
      <ThemeProvider theme={theme}>
        <Header />
        <CvPage />
        <Footer />
      </ThemeProvider>
    );
}

export default App;