import React, { useContext, useState } from 'react'


const GlobalStateContext = React.createContext();
const GlobalStateUpdateContext = React.createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext);

export default function GlobalStateProvider({ children }) {

    const [data, setData] = useState({
        user: "",
        darkTheme: false,
        loginStatus: false,
        token: null
    })

    return (
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>
    )
}
