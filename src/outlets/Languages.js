import JsIcon from "@public/icons/language-icons/JsIcon";
import { Typewriter } from "react-simple-typewriter";

const Languages = () => {

    return (
        <div className="flex-1 flex flex-col m-10">
            <span className="text-2xl text-gray-300 font-mono">
                <Typewriter
                    words={[
                        'Specialized Programming Languages & Related Projects'
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