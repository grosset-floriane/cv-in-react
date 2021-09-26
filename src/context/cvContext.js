import React, {createContext, useState, useEffect} from "react";
import CodingLightTheme from "../components/styles/CodingLightTheme";


const cvContext = createContext();

function CvContextProvider(props) {
    const [userData, setUserData] = useState({});
    const [cvContent, setCvContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [theme, setTheme] = useState(CodingLightTheme);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://florianegrosset.com/api/cv/read.php?id=1')
            .then(response => response.json())
            .then(data => {
                setUserData(data.cvUserData);
                setCvContent(data.cvContent);
                setIsLoading(false);
            })
    }, [])

    

    return(
        <cvContext.Provider 
            value={{cvContent, 
                    userData, 
                    isLoading, 
                    theme,
                    setTheme}}>
            {props.children}
        </cvContext.Provider>
    );
}

export {cvContext, CvContextProvider}
