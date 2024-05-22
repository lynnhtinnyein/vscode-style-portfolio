import React from "react";
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
    return (
        <div className="flex-1 flex flex-col p-5 md:p-10 overflow-hidden space-y-5">
            <div className="flex flex-row space-x-5 items-center">
                <div>
                    
                </div>
                <div className="flex flex-col font-mono space-y-1">
                    <span className="text-2xl">Working On</span>
                    <span>4 | Public Repositories</span>
                    <span>11 | Private Repositories</span>
                </div>
            </div>

            <div className="bg-black overflow-auto p-3">
                <GitHubCalendar username="lynnhtinnyein"/>
            </div>
        </div>
    );
};

export default Github;
