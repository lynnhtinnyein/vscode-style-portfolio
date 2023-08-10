import GithubIcon from "@/icons/social_media_icons/GithubIcon";
import LinkedInIcon from "@/icons/social_media_icons/LinkedInIcon";
import MessengerIcon from "@/icons/social_media_icons/MessengerIcon";
import TelegramIcon from "@/icons/social_media_icons/TelegramIcon";
import SourceControlIcon from "@/icons/vs_code_icons/SourceControlIcon";
import WarningTriangleIcon from "@/icons/vs_code_icons/WarningTriangleIcon";
import XCircleIcon from "@/icons/vs_code_icons/XCircleIcon";

const Footer = () => {
    return (
        <div className="footer flex flex-row justify-between items-center bg-zinc-700 px-3">

            <div className="flex flex-row items-center">
            
                <a 
                    href="https://github.com/lynnhtinnyein/vscode_style_portfolio" 
                    className="flex flex-row items-center"
                    target="_blank"
                >
                    <span className="text-gray-300 mr-1">
                        <SourceControlIcon size="13"/>
                    </span>
                    <span className="text-xs text-gray-300 mr-4">
                        main
                    </span>
                </a>
                
                <span className="text-gray-300 mr-1">
                    <XCircleIcon size="16"/>
                </span>

                <span className="text-gray-300 text-xs mr-1">
                    0
                </span>

                <span className="text-gray-300 mr-1">
                    <WarningTriangleIcon size="16"/>
                </span>

                <span className="text-gray-300 text-xs">
                    0
                </span>
            </div>

            <div className="flex flex-row items-center space-x-2">

                <a 
                    href="https://www.linkedin.com/in/lin-htin-nyein-193603171" 
                    className="text-gray-300"
                    target="_blank"
                >
                    <LinkedInIcon size="14"/>
                </a>

                <a 
                    href="https://www.github.com/lynnhtinnyein" 
                    className="text-gray-300"
                    target="_blank"
                >
                    <GithubIcon size="14"/>
                </a>

                <a 
                    href="https://t.me/+959974066464" 
                    className="text-gray-300"
                    target="_blank"
                >
                    <TelegramIcon size="14"/>
                </a>

                <a 
                    href="https://www.m.me/lynnhtinnyein" 
                    className="text-gray-300"
                    target="_blank"
                >
                    <MessengerIcon size="14"/>
                </a>


            </div>

        </div>
    );
}
 
export default Footer;