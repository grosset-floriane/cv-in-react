import React, {useContext} from 'react';
import Header from './components/Header';
import CvPage from './pages/CvPage.js';
import Footer from './components/Footer';
import './index.css';
import styled, { ThemeProvider } from "styled-components";
import {cvContext} from "./context/cvContext";

// const currentTheme = CodingLightTheme;

function App() {
    const {theme} = useContext(cvContext);
    const Wrapper = styled.div`
      background-color: ${props => props.theme.backgroundColor};

    `;

    return(
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <CvPage />
          <Footer />
        </Wrapper>
        
      </ThemeProvider>
    );
}

export default App;