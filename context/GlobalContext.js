import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
    activePage: 1,
    openPages: [1],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_PAGE":
            return { ...state, activePage: action.payload };

        case "SET_OPEN_PAGES":
            return { ...state, openPages: action.payload };

        default:
            return state;
    }
};

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };
