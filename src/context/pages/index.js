import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const PagesContext = createContext();

const initialState = {
    activePage: 5,
    openedPages: [5],
};

const PagesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //methods
        const openPage = (id) => {
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
            
            if(!state.openedPages.includes(id)){
                dispatch({ type: 'SET_OPENED_PAGES', payload: [...state.openedPages, id] });
            }
        };

        const closePage = (id) => {
            const { activePage, openedPages } = state;
            if(activePage === id){
                if(openedPages.length === 1){
                    dispatch({ type: 'SET_ACTIVE_PAGE', payload: null })
                } else {
                    const lastOpenPage = openedPages[openedPages.length - 1];
                    dispatch({ type: 'SET_ACTIVE_PAGE', payload: lastOpenPage })
                }
            }            
            dispatch({ type: 'SET_OPENED_PAGES', payload: openedPages.filter( e => e !== id ) }); 
        }

        const switchPage = (id) => {
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
        }

    return (
        <PagesContext.Provider 
            value={{ 
                ...state, 
                openPage,
                closePage,
                switchPage
            }}>
            {children}
        </PagesContext.Provider>
    );
};

const usePages = () => {
    return useContext(PagesContext);
};

export { PagesProvider, usePages };
