import React, {useContext} from 'react';
import { ThemeProvider } from "styled-components";

import {cvContext} from "./context/cvContext";

import GlobalStyle from "./styles/GlobalStyle";

// import './index.css';
import Wrapper from "./styles/wrapperStyles";

import CV from './containers/CV/';
import Header from './components/Header/';
import Footer from './components/Footer/';

function App() {
  const {theme} = useContext(cvContext);
  
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <CV />
        <Footer />
      </Wrapper>
      
    </ThemeProvider>
  );
}

export default App;