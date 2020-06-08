import React,{useState, createContext} from 'react'

export const MainContext = createContext();


export const MainProvider = (props) => {
    const [user,setUser] = useState([]);
    return(
        <MainContext.Provider value={[user,setUser]}>
            {props.children}
        </MainContext.Provider>
    );

}
