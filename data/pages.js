import ReactIcon from "@/icons/language_icons/ReactIcon";
import AccountIcon from "../icons/vs_code_icons/AccountIcon";
import CodeIcon from "../icons/vs_code_icons/CodeIcon";
import GithubIcon from "../icons/vs_code_icons/GithubIcon";
import MailIcon from "../icons/vs_code_icons/MailIcon";
import JsIcon from "@/icons/language_icons/JsIcon";
import CssIcon from "@/icons/language_icons/CssIcon";
import HtmlIcon from "@/icons/language_icons/HtmlIcon";
import GitIcon from "@/icons/language_icons/GitIcon";

export const pages = [
    {
        id: 1,
        name: 'welcome.jsx',
        fileIcon: <ReactIcon size="16" />,
        sideBarIcon: <CodeIcon/>,
        position: 'top',
        showInSideBar: false,
    },
    {
        id: 2,
        name: 'projects.js',
        fileIcon: <JsIcon size="16" />,
        sideBarIcon: <CodeIcon/>,
        position: 'top',
        showInSideBar: true
    },
    {
        id: 3,
        name: 'github.git',
        fileIcon: <GitIcon size="16" />,
        sideBarIcon: <GithubIcon/>,
        position: 'top',
        showInSideBar: true
    },
    {
        id: 4,
        name: 'contact.css',
        fileIcon: <CssIcon size="16" />,
        sideBarIcon: <MailIcon/>,
        position: 'top',
        showInSideBar: true
    },
    {
        id: 5,
        name: 'about.html',
        fileIcon: <HtmlIcon size="16" />,
        sideBarIcon: <AccountIcon/>,
        position: 'bottom',
        showInSideBar: true
    }
];