import React from 'react';
import CvHeader from './cv/CvHeader';
import CvContent from './cv/CvContent'
//import StyleNav from './StyleNav';
import styled from 'styled-components';

const Main = styled.main`
            padding-top: ${props => props.theme.heightHeader} ; 
            padding-bottom: calc(${props => props.theme.heightHeader} / 2); 

            @media (min-width: ${props => props.theme.tablet}) {
            padding-top: calc(${props => props.theme.heightHeader} * 1.5);
            padding-bottom: ${props => props.theme.heightHeader} ; 
        }
    `;

class MainContent extends React.Component {

    constructor() {
        super();
        this.state = {
            cvGeneral: {},
            cvUserData: {},
            cvContent: [],
            isLoading: false
        }
        

    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://florianegrosset.com/api/cv/read.php?id=1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    cvGeneral: data.cvGeneral,
                    cvUserData: data.cvUserData,
                    cvContent: data.cvContent,
                    isLoading: false
                })
                
            })
    }

    
    render() {
        
        return(
            <Main>
                <CvHeader userData={this.state.cvUserData}/>
                <CvContent cvContent={this.state.cvContent} />
            </Main>
        );
    }
    
}

export default MainContent;