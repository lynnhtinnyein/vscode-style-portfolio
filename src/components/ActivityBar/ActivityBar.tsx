import PageLinkButton from "./partials/PageLinkButton";
import ExplorerToggleButton from "./partials/ExplorerToggleButton";
import GithubLinkButton from "./partials/GithubLinkButton";
import SettingButton from "./partials/SettingButton";
import { pages } from "@/data/pages";

const topPages = pages.filter((e) => e.activityBarPosition === "top");
const bottomPages = pages.filter((e) => e.activityBarPosition === "bottom");

const ActivityBar = () => {
    return (
        <div className="flex flex-col justify-between bg-[var(--color-activitybar)] min-w-12 h-full">
            {/* top */}
            <div className="flex flex-col">
                <ExplorerToggleButton />
                {topPages.map((page) => (
                    <PageLinkButton
                        key={page.id}
                        id={page.id}
                        pathname={page.pathname}
                        icon={page.activityBarIcon}
                    />
                ))}
                <GithubLinkButton />
            </div>
            {/* bottom */}
            <div className="flex flex-col">
                {bottomPages.map((page) => (
                    <PageLinkButton
                        key={page.id}
                        id={page.id}
                        pathname={page.pathname}
                        icon={page.activityBarIcon}
                    />
                ))}
                <SettingButton />
            </div>
        </div>
    );
};

export default ActivityBar;
