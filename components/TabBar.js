import { useGlobalContext } from "@/context/GlobalContext";
import { pages } from "@/data/pages";
import XIcon from "@/icons/vs_code_icons/XIcon";

const TabBar = () => {

    const { activePage, openPages, dispatch } = useGlobalContext();

    //methods
    const closePage = (id) => {

        if(activePage === id){
            const lastOpenPage = openPages[openPages.length - 1];
            dispatch({ type: 'SET_ACTIVE_PAGE', payload: lastOpenPage })
        }            
        
        dispatch({ type: 'SET_OPEN_PAGES', payload: openPages.filter( e => e !== id ) }); 
    }

    return (
        <div className="flex flex-row bg-zinc-900 items-center overflow-x-auto">
            {openPages.map( (id) => (
                <div
                    key={id}
                    className={`flex flex-row cursor-pointer pr-3 items-center space-x-2 border-r border-r-zinc-900 ${
                        activePage === id ? "bg-zinc-800" : "bg-zinc-700"
                    }`}
                >
                    <div
                        className="flex flex-row space-x-2 py-2 pl-3"
                        onClick={() =>
                            dispatch({ type: "SET_ACTIVE_PAGE", payload: id })
                        }
                    >
                        {pages.find((e) => e.id === id).fileIcon}

                        <span className="text-yellow-200 text-xs">
                            {pages.find((e) => e.id === id).name}
                        </span>
                    </div>

                    <div
                        className="hover:bg-gray-500 rounded"
                        onClick={() => closePage(id)}
                    >
                        <XIcon size="14" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TabBar;
