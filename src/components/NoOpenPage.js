import { usePageController } from "@/context/pages";
import { pages } from "@/data/pages";
import VsCodeIcon from "@public/icons/vs-code-icons/VsCodeIcon";

const NoOpenPage = () => {
    const { openPage } = usePageController();

    return (
        <div className="flex flex-1 flex-col justify-center items-center">

            <VsCodeIcon/>
            
            <span className="font-mono text-zinc-500 mt-10">
                Open A Tab to Find Out
            </span>
            
            <div className="flex flex-col mt-5 items-center">
                { pages.filter( e => e.isMainPage ).map( page => 
                    <div 
                        key={page.id}
                        className="flex flex-row cursor-pointer items-center space-x-2 mt-3"
                    >
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