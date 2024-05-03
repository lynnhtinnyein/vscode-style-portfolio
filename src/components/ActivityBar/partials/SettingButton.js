import React, { useState } from "react";
import ActionButton from "./ActionButton";
import SettingsIcon from "@public/icons/vs-code-icons/SettingsIcon";
import CheckIcon from "@public/icons/vs-code-icons/CheckIcon";

const SettingButton = ({
    isDarkMode, 
    setIsDarkMode
}) => {
    const [showSetting, setShowSetting] = useState(false);
    
    return (
        <div className="relative">
            <ActionButton
                icon={<SettingsIcon />}
                isActive={showSetting}
                onClick={() => setShowSetting(!showSetting)}
            />

            { showSetting ? (
                <>
                    {/* backdrop to close setting */}
                    <div
                        className="fixed top-0 right-0 left-0 bottom-0 bg-none"
                        onClick={() => setShowSetting(false)}
                    />
                    <div className="absolute left-11 bottom-2 min-w-32 p-1 flex flex-col rounded border space-y-1 border-zinc-600 bg-zinc-800">
                        <span className="text-xs text-gray-300 ml-2">
                            Coming Soon...
                        </span>
                    </div>
                </>
            ) : ''}
        </div>
    );
};

export default SettingButton;

// const SettingButton = ({
//     isDarkMode, 
//     setIsDarkMode
// }) => {
//     const [showSetting, setShowSetting] = useState(false);
    
//     return (
//         <div className="relative">
//             <ActionButton
//                 icon={<SettingsIcon />}
//                 isActive={showSetting}
//                 onClick={() => setShowSetting(!showSetting)}
//             />

//             { showSetting ? (
//                 <>
//                     {/* backdrop to close setting */}
//                     <div
//                         className="fixed top-0 right-0 left-0 bottom-0 bg-none"
//                         onClick={() => setShowSetting(false)}
//                     />
//                     <div className="absolute left-11 bottom-2 min-w-32 p-1 flex flex-col rounded border space-y-1 border-zinc-600 bg-zinc-800">
//                         <div className="flex justify-center items-center mx-2 min-h-8 border-b border-b-zinc-700">
//                             <span className="text-sm font-bold">Themes</span>
//                         </div>

//                         <div className="flex flex-col">
//                             <div
//                                 className="flex cursor-pointer flex-row min-h-8 text-sm justify-start items-center rounded hover:bg-zinc-700 active:bg-zinc-600"
//                                 onClick={() => setIsDarkMode(false)}
//                             >
//                                 <div className="flex justify-center min-w-7">
//                                     {!isDarkMode ? <CheckIcon size={14} /> : ""}
//                                 </div>
//                                 <span className="text-xs">Light</span>
//                             </div>
//                             <div
//                                 className="flex cursor-pointer flex-row min-h-8 text-sm justify-start items-center rounded hover:bg-zinc-700 active:bg-zinc-600"
//                                 onClick={() => setIsDarkMode(true)}
//                             >
//                                 <div className="flex justify-center min-w-7">
//                                     {isDarkMode ? <CheckIcon size={14} /> : ""}
//                                 </div>
//                                 <span className="text-xs">Dark</span>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             ) : ''}
//         </div>
//     );
// };

// export default SettingButton;
