const reducer = (state, action) => {
    switch (action.type) {
        case "SET_ACTIVE_PAGE":{
            return { ...state, activePage: action.payload };
        }

        case "SET_OPENED_PAGES": {
            return { ...state, openedPages: action.payload };
        }

        default:
            return state;
    }
};

export default reducer;
