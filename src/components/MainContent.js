import React from 'react';
import CvHeader from './cv/CvHeader';
import CvContent from './cv/CvContent';

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
            .then();

    }

    render() {
        console.log(this.state.cvContent);
        return(
            <main>
                <h2>{this.state.cvGeneral.cvName} CV</h2>
                <CvHeader userData={this.state.cvUserData}/>
                <CvContent cvContent={this.state.cvContent} />
            </main>
        );
    }
    
}

export default MainContent;