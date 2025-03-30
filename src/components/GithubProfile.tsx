import { FaGithub, FaCodeBranch, FaUserFriends, FaRegCalendarAlt, FaLock } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const GithubProfile = ({ githubData }) => {
    // If no data is provided, show a message
    if (!githubData) {
        return (
            <div className="bg-[#1a1b26] rounded-lg p-6 shadow-md text-center">
                <p>GitHub data is currently unavailable.</p>
            </div>
        );
    }

    const { userData, repos, privateRepos, languageStats } = githubData;

    const calculateAccountAge = (createdAt: string | number | Date) => {
        const createDate = new Date(createdAt);
        if (isNaN(createDate.getTime())) {
            throw new Error("Invalid date format");
        }
        const now = new Date();
        const diffInYears = (now.getTime() - createDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(diffInYears);
    };
    

    // Get most starred repos
    const getMostStarredRepos = () => {
        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
    };

    const starredRepos = getMostStarredRepos();
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    return (
        <section className="flex flex-col space-y-6 mb-10">
            <div className="flex">
                <h2 className="text-3xl text-purple-400 border-b-4 border-[var(--color-line)]">
                    GitHub Profile
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Profile Card */}
                <div className="bg-[#1a1b26] rounded-lg p-6 shadow-md flex flex-col items-center">
                    <img
                        src={userData.avatar_url}
                        alt="GitHub Avatar"
                        className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-4"
                    />
                    <h3 className="text-xl font-semibold">{userData.name}</h3>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 flex items-center gap-1 text-sm mb-2"
                    >
                        <FaGithub size={16} />@{userData.login}
                    </a>
                    <p className="text-zinc-400 text-sm">{userData.location}</p>
                    <p className="text-zinc-400 text-sm mt-2">
                        <FaRegCalendarAlt className="inline mr-1" />
                        GitHub member for {calculateAccountAge(userData.created_at)} years
                    </p>
                </div>

                {/* Stats Card */}
                <div className="bg-[#1a1b26] rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-emerald-400">Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#24283b] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {userData.public_repos}
                                {privateRepos > 0 && (
                                    <span className="text-sm text-zinc-400 ml-2">
                                        +{privateRepos} <FaLock className="inline" size={12} />
                                    </span>
                                )}
                            </div>
                            <div className="text-sm text-zinc-400 flex items-center justify-center">
                                <FaCodeBranch className="mr-1" /> Repositories
                            </div>
                        </div>
                        <div className="bg-[#24283b] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {userData.followers}
                            </div>
                            <div className="text-sm text-zinc-400 flex items-center justify-center">
                                <FaUserFriends className="mr-1" /> Followers
                            </div>
                        </div>
                        <div className="bg-[#24283b] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-indigo-400">
                                {userData.following}
                            </div>
                            <div className="text-sm text-zinc-400 flex items-center justify-center">
                                <FaUserFriends className="mr-1" /> Following
                            </div>
                        </div>
                        <div className="bg-[#24283b] p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-indigo-400">{totalStars}</div>
                            <div className="text-sm text-zinc-400 flex items-center justify-center">
                                <BiGitRepoForked className="mr-1" /> Total Stars
                            </div>
                        </div>
                    </div>
                </div>

                {/* Languages Card */}
                <div className="bg-[#1a1b26] rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-emerald-400">Top Languages</h3>
                    <div className="space-y-3">
                        {Object.entries(languageStats)
                            .sort((a, b) => Number(b[1]) - Number(a[1]))
                            .slice(0, 5)
                            .map(([language, count], index) => (
                                <div key={language} className="flex items-center">
                                    <div className="w-full bg-[#24283b] rounded-full h-4">
                                        <div
                                            className={`h-4 rounded-full ${
                                                index % 3 === 0
                                                    ? "bg-indigo-500"
                                                    : index % 3 === 1
                                                    ? "bg-emerald-500"
                                                    : "bg-purple-500"
                                            }`}
                                            style={{ width: `${count}%` }}
                                        ></div>
                                    </div>
                                    <span className="ml-2 text-sm min-w-16">{language}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Top Repositories */}
            {starredRepos.length > 0 && (
                <div className="bg-[#1a1b26] rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                        Top Repositories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {starredRepos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#24283b] p-4 rounded-lg hover:bg-[#2c3149] transition-colors"
                            >
                                <h4 className="font-medium text-indigo-400">{repo.name}</h4>
                                <p className="text-sm text-zinc-400 line-clamp-2 h-10 mt-1">
                                    {repo.description || "No description provided"}
                                </p>
                                <div className="flex items-center mt-2 text-xs text-zinc-400">
                                    {repo.language && (
                                        <span className="flex items-center mr-3">
                                            <span
                                                className="w-3 h-3 rounded-full mr-1"
                                                style={{
                                                    backgroundColor:
                                                        repo.language === "JavaScript"
                                                            ? "#f7df1e"
                                                            : repo.language === "TypeScript"
                                                            ? "#3178c6"
                                                            : repo.language === "HTML"
                                                            ? "#e34c26"
                                                            : repo.language === "CSS"
                                                            ? "#563d7c"
                                                            : repo.language === "Python"
                                                            ? "#3572A5"
                                                            : "#6e40c9",
                                                }}
                                            ></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center">
                                        <svg
                                            className="w-3 h-3 mr-1"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                        >
                                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                                        </svg>
                                        {repo.stargazers_count}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-center">
                <a
                    href={userData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                    View Full Profile
                </a>
            </div>
        </section>
    );
};

export default GithubProfile;
