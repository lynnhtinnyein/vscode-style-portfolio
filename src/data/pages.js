//icons
import ReactIcon from "@public/icons/language-icons/ReactIcon";
import AccountIcon from "@public/icons/vs-code-icons/AccountIcon";
import CodeIcon from "@public/icons/vs-code-icons/CodeIcon";
import GithubIcon from "@public/icons/vs-code-icons/GithubIcon";
import MailIcon from "@public/icons/vs-code-icons/MailIcon";
import JsIcon from "@public/icons/language-icons/JsIcon";
import CssIcon from "@public/icons/language-icons/CssIcon";
import GitIcon from "@public/icons/language-icons/GitIcon";
import HomeIcon from "@public/icons/vs-code-icons/HomeIcon";
import MarkDownIcon from "@public/icons/language-icons/MarkDownIcon";
import JsonIcon from "@public/icons/language-icons/JsonIcon";
import JsObjectIcon from "@public/icons/vs-code-icons/JsonIcon";

//pages
import Welcome from "@/outlets/Welcome";
import Languages from "@/outlets/Languages";
import Projects from "@/outlets/Projects";
import Github from "@/outlets/Github";
import Contact from "@/outlets/Contact";
import About from "@/outlets/About";

export const pages = [
    {
        id: 1,
        name: 'welcome.jsx',
        fileIcon: <ReactIcon size="16" />,
        activityBarIcon: <HomeIcon/>,
        position: 'top',
        component: <Welcome/>
    },
    {
        id: 2,
        name: 'languages.json',
        fileIcon: <JsonIcon size="16" />,
        activityBarIcon: <JsObjectIcon/>,
        position: 'top',
        component: <Languages/>
    },
    {
        id: 3,
        name: 'projects.js',
        fileIcon: <JsIcon size="16" />,
        activityBarIcon: <CodeIcon/>,
        position: 'top',
        component: <Projects/>
    },
    {
        id: 4,
        name: 'github.git',
        fileIcon: <GitIcon size="16" />,
        activityBarIcon: <GithubIcon/>,
        position: 'top',
        component: <Github/>
    },
    {
        id: 5,
        name: 'contact.css',
        fileIcon: <CssIcon size="16" />,
        activityBarIcon: <MailIcon/>,
        position: 'top',
        component: <Contact/>
    },
    {
        id: 6,
        name: 'about.md',
        fileIcon: <MarkDownIcon size="16" />,
        activityBarIcon: <AccountIcon/>,
        position: 'bottom',
        component: <About/>
    }
];