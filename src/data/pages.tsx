import ReactIcon from "@public/icons/language-icons/ReactIcon";
import JsIcon from "@public/icons/language-icons/JsIcon";
import CssIcon from "@public/icons/language-icons/CssIcon";
import GitIcon from "@public/icons/language-icons/GitIcon";
import MarkDownIcon from "@public/icons/language-icons/MarkDownIcon";
import JsonIcon from "@public/icons/language-icons/JsonIcon";
import AccountIcon from "@public/icons/vs-code-icons/AccountIcon";
import CodeIcon from "@public/icons/vs-code-icons/CodeIcon";
import GithubIcon from "@public/icons/vs-code-icons/GithubIcon";
import MailIcon from "@public/icons/vs-code-icons/MailIcon";
import HomeIcon from "@public/icons/vs-code-icons/HomeIcon";
import JsObjectIcon from "@public/icons/vs-code-icons/JsonIcon";

export const pages: Page[] = [
    {
        id: 1,
        name: 'welcome.jsx',
        pathname: '/welcome',
        fileIcon: <ReactIcon size="16" />,
        activityBarIcon: <HomeIcon/>,
        activityBarPosition: 'top'
    },
    {
        id: 2,
        name: 'skills.json',
        pathname: '/skills',
        fileIcon: <JsonIcon size="16" />,
        activityBarIcon: <JsObjectIcon/>,
        activityBarPosition: 'top'
    },
    {
        id: 3,
        name: 'projects.js',
        pathname: '/projects',
        fileIcon: <JsIcon size="16" />,
        activityBarIcon: <CodeIcon/>,
        activityBarPosition: 'top'
    },
    {
        id: 4,
        name: 'github.git',
        pathname: '/github',
        fileIcon: <GitIcon size="16" />,
        activityBarIcon: <GithubIcon/>,
        activityBarPosition: 'top'
    },
    {
        id: 5,
        name: 'contact.css',
        pathname: '/contact',
        fileIcon: <CssIcon size="16" />,
        activityBarIcon: <MailIcon/>,
        activityBarPosition: 'top'
    },
    {
        id: 6,
        name: 'about.md',
        pathname: '/about',
        fileIcon: <MarkDownIcon size="16" />,
        activityBarIcon: <AccountIcon/>,
        activityBarPosition: 'bottom'
    }
];