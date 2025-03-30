"use client";
import { ReactNode, createContext, useContext, useEffect, useReducer, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { pages } from "@/data/pages";
import reducer from "./reducer";

export interface GlobalState {
    showExplorer: boolean;
    activePageId: number | null;
    openedPageIds: number[];
}

export type GlobalStateAction =
    | { type: "SET_SHOW_EXPLORER"; payload: boolean }
    | { type: "SET_ACTIVE_PAGE_ID"; payload: number | null }
    | { type: "SET_OPENED_PAGE_IDS"; payload: number[] };

export interface GlobalContextType extends GlobalState {
    setShowExplorer: (show: boolean) => void;
    setActivePage: (pageId: number | null) => void;
    closePage: (pageId: number) => void;
}

const initialState: GlobalState = {
    showExplorer: true,
    activePageId: null,
    openedPageIds: [],
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const router = useRouter();

    //methods
    const setShowExplorer = (show: boolean) => {
        dispatch({ type: "SET_SHOW_EXPLORER", payload: show });
    };

    const setActivePage = (pageId: number | null) => {
        dispatch({ type: "SET_ACTIVE_PAGE_ID", payload: pageId });
        if (pageId && !state.openedPageIds.includes(pageId)) {
            dispatch({ type: "SET_OPENED_PAGE_IDS", payload: [...state.openedPageIds, pageId] });
        }
    };

    const closePage = (pageId: number) => {
        const { activePageId, openedPageIds } = state;
        if (activePageId === pageId) {
            if (openedPageIds.length === 1) {
                dispatch({ type: "SET_ACTIVE_PAGE_ID", payload: null });
                router.push('/');
            } else {
                const otherOpenedPageIds = openedPageIds.filter((id) => id !== pageId);
                const lastOpenedPageId = otherOpenedPageIds[otherOpenedPageIds.length - 1];
                const lastOpenedPage = pages.find((page) => page.id === lastOpenedPageId);
                if (lastOpenedPage) {
                    dispatch({ type: "SET_ACTIVE_PAGE_ID", payload: lastOpenedPageId });
                    router.push(lastOpenedPage.pathname);
                }
            }
        }
        dispatch({
            type: "SET_OPENED_PAGE_IDS",
            payload: openedPageIds.filter((id) => id !== pageId),
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                setShowExplorer,
                setActivePage,
                closePage,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const globalContext = useContext(GlobalContext) as GlobalContextType;
    const { setActivePage } = globalContext;
    const pathname = usePathname();
    const router = useRouter();
    const isFirstRender = useRef(true);

    //path change watcher
    useEffect(() => {
        if (isFirstRender.current && pathname === "/") {
            router.push('/welcome');
            isFirstRender.current = false;
        } else {
            setActivePage(pages.find((page) => pathname.startsWith(page.pathname))?.id || null);
        }
    }, [pathname]);

    return globalContext;
};

export default GlobalContextProvider;
