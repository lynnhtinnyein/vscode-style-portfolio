import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { useRouter } from "next/router";
import { pages } from "@/data/pages";

const PageControllerContext = createContext();

const initialState = {
    activePage: null,
    openedPages: [],
};

const PageControllerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();

    useEffect( () => {
        const currentPage = pages.find( page => page.pathname === router.pathname );
        if(currentPage){
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: currentPage.id });
            dispatch({ type: 'SET_OPENED_PAGES', payload: [...state.openedPages, currentPage.id] });
        }
    }, []);

    //methods
        const redirect = (id) => {
            const pagePathname = pages.find( page => page.id === id).pathname;
            router.push(pagePathname);
        } 

        const openPage = (id) => {
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
            if(!state.openedPages.includes(id)){
                dispatch({ type: 'SET_OPENED_PAGES', payload: [...state.openedPages, id] });
            }
            redirect(id);
        };

        const closePage = (id) => {
            const { activePage, openedPages } = state;
            if(activePage === id){
                if(openedPages.length === 1){
                    dispatch({ type: 'SET_ACTIVE_PAGE', payload: null })
                } else {
                    const lastOpenPage = openedPages[openedPages.length - 1];
                    dispatch({ type: 'SET_ACTIVE_PAGE', payload: lastOpenPage });
                    redirect(lastOpenPage);
                }
            }            
            dispatch({ type: 'SET_OPENED_PAGES', payload: openedPages.filter( e => e !== id ) });
        }

        const switchPage = (id) => {
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: id });
            redirect(id);
        }

    return (
        <PageControllerContext.Provider 
            value={{ 
                ...state, 
                openPage,
                closePage,
                switchPage
            }}>
            {children}
        </PageControllerContext.Provider>
    );
};

const usePageController = () => {
    return useContext(PageControllerContext);
};

export { PageControllerProvider, usePageController };
