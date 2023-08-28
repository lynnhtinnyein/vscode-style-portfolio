import useMaxPageHeight from "@/hooks/useMaxPageHeight";
import JsIcon from "@/icons/language_icons/JsIcon";
import { Typewriter } from "react-simple-typewriter";

const Languages = () => {

    const maxPageHeight = useMaxPageHeight();

    return (
        <div 
            className="flex flex-1 flex-col bg-zinc-800 m-10"
            style={{
                maxHeight: maxPageHeight
            }}
        >
            <span className="text-2xl text-gray-300 font-mono">
                <Typewriter
                    words={[
                        'Feel Confident in working with'
                    ]}
                    typeSpeed={30}
                />
            </span>

            <div className="flex flex-wrap mt-8">
                
                <div>
                    <JsIcon size="150"/>
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500">
                            fdf
                        </span>
                        <span className="text-xs text-gray-400">
                            fdf
                        </span>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Languages;