import { useGlobalContext } from "@/context/GlobalContext";
import { pages } from "@/data/pages";
import useMaxPageHeight from "@/hooks/useMaxPageHeight";
import VsCodeIcon from "@/icons/vs_code_icons/VsCodeIcon";

const NoOpenPage = () => {

    const maxPageHeight = useMaxPageHeight();
    const { openPage } = useGlobalContext();

    return (
        <div 
            className="flex flex-1 flex-col justify-center items-center bg-zinc-800"
            style={{
                maxHeight: maxPageHeight
            }}
        >

            <VsCodeIcon/>
            
            <span className="font-mono text-zinc-500 mt-10">
                Open A Tab to Find Out
            </span>
            
            <div className="flex flex-col mt-5 items-center">
                { pages.map( page => 
                    <div className="flex flex-row cursor-pointer items-center space-x-2 mt-3">
                        {page.fileIcon}
                        <span 
                            className="text-xs text-yellow-100 hover:underline"
                            onClick={ () => openPage(page.id) }
                        >
                            {page.name}   
                        </span>
                    </div>
                )}
            </div>
            
        </div>
    );
}
 
export default NoOpenPage;