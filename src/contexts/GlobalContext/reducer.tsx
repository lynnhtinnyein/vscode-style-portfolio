"use client";
import { GlobalStateAction, GlobalState } from ".";

const reducer = (state: GlobalState, action: GlobalStateAction) => {
    switch (action.type) {
        case "SET_SHOW_EXPLORER": {
            return { ...state, showExplorer: action.payload };
        }
        case "SET_ACTIVE_PAGE_ID": {
            return { ...state, activePageId: action.payload };
        }
        case "SET_OPENED_PAGE_IDS": {
            return { ...state, openedPageIds: action.payload };
        }
        default:
            return state;
    }
};

export default reducer;
