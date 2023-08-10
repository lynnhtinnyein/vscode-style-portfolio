import ReactIcon from "@/icons/language_icons/ReactIcon";
import AccountIcon from "../icons/vs_code_icons/AccountIcon";
import CodeIcon from "../icons/vs_code_icons/CodeIcon";
import GithubIcon from "../icons/vs_code_icons/GithubIcon";
import MailIcon from "../icons/vs_code_icons/MailIcon";
import JsIcon from "@/icons/language_icons/JsIcon";
import CssIcon from "@/icons/language_icons/CssIcon";
import GitIcon from "@/icons/language_icons/GitIcon";
import Welcome from "@/components/pages/Welcome";
import Languages from "@/components/pages/Languages";
import Projects from "@/components/pages/Projects";
import Github from "@/components/pages/Github";
import Contact from "@/components/pages/Contact";
import About from "@/components/pages/About";
import HomeIcon from "@/icons/vs_code_icons/HomeIcon";
import MarkDownIcon from "@/icons/language_icons/MarkDownIcon";
import JsonIcon from "@/icons/language_icons/JsonIcon";
import JsObjectIcon from "@/icons/vs_code_icons/JsonIcon";

export const pages = [
    {
        id: 1,
        name: 'welcome.jsx',
        fileIcon: <ReactIcon size="16" />,
        sideBarIcon: <HomeIcon/>,
        position: 'top',
        component: <Welcome/>
    },
    {
        id: 2,
        name: 'languages.json',
        fileIcon: <JsonIcon size="16" />,
        sideBarIcon: <JsObjectIcon/>,
        position: 'top',
        component: <Languages/>
    },
    {
        id: 3,
        name: 'projects.js',
        fileIcon: <JsIcon size="16" />,
        sideBarIcon: <CodeIcon/>,
        position: 'top',
        component: <Projects/>
    },
    {
        id: 4,
        name: 'github.git',
        fileIcon: <GitIcon size="16" />,
        sideBarIcon: <GithubIcon/>,
        position: 'top',
        component: <Github/>
    },
    {
        id: 5,
        name: 'contact.css',
        fileIcon: <CssIcon size="16" />,
        sideBarIcon: <MailIcon/>,
        position: 'top',
        component: <Contact/>
    },
    {
        id: 6,
        name: 'about.md',
        fileIcon: <MarkDownIcon size="16" />,
        sideBarIcon: <AccountIcon/>,
        position: 'bottom',
        component: <About/>
    }
];