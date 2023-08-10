import React, { createContext, useContext, useReducer } from "react";

const GlobalContext = createContext();

const initialState = {
    activePage: 1,
    openedPages: [1],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_PAGE":
            return { ...state, activePage: action.payload };

        case "SET_OPEN_PAGES":
            return { ...state, openedPages: action.payload };

        default:
            return state;
    }
};

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //methods
    const openPage = (id) => {
        dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
        
        if(!state.openedPages.includes(id)){
            dispatch({ type: 'SET_OPEN_PAGES', payload: [...state.openedPages, id] });
        }
    };

    return (
        <GlobalContext.Provider value={{ ...state, dispatch, openPage }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };
