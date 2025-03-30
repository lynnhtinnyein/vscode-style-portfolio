import { fetchGitHubData } from "@/lib/githubApi";
import { FaRegCalendarAlt, FaUserFriends } from "react-icons/fa";
import { FaCodeBranch, FaGithub, FaGlobe, FaLock } from "react-icons/fa6";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import GitHubCalendar from "react-github-calendar";

const GitHubPage = async () => {
    const { userData, repos } = await fetchGitHubData();

    const calculateAccountAge = (createdAt: string | number | Date): number => {
        const createDate = new Date(createdAt).getTime();
        const now = Date.now();
        const diffInYears = (now - createDate) / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(diffInYears);
    };

    const getMostStarredRepos = () => {
        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
    };

    const starredRepos = getMostStarredRepos();

    return (
        <div className="animate-fadeup flex flex-col space-y-12 flex-1 p-5 md:p-10 overflow-auto font-mono">
            <section className="flex flex-col space-y-4">
                <div className="flex">
                    <h2 className="text-3xl text-purple-400 border-b-4 border-[var(--color-line)]">
                        GitHub Profile
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Profile Card */}
                    <div className="bg-[var(--color-card)] border border-[var(--color-line)] space-y-2 rounded-lg p-6 shadow flex flex-col items-center">
                        <Image
                            src={userData.avatar_url}
                            alt="GitHub Avatar"
                            height={24}
                            width={24}
                            className="w-24 h-24 rounded-full border-4 border-indigo-500"
                        />
                        <h3 className="text-xl font-semibold">{userData.name}</h3>
                        <a
                            href={userData.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 flex items-center gap-1 text-sm"
                        >
                            <FaGithub size={16} />@{userData.login}
                        </a>
                        <p className="text-[var(--color-text)] text-sm">{userData.location}</p>
                        <p className="text-[var(--color-text)] text-sm">
                            <FaRegCalendarAlt className="inline mr-1" />
                            GitHub member for {calculateAccountAge(userData.created_at)} years
                        </p>
                    </div>

                    {/* Stats Card */}
                    <div className="bg-[var(--color-card)] border border-[var(--color-line)] rounded-lg p-6 shadow">
                        <h3 className="text-lg font-semibold mb-4 text-emerald-400">Stats</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center bg-[var(--color-background)] p-4 rounded-lg text-center">
                                <div className="flex flex-row space-x-2 items-center font-bold text-2xl text-indigo-400 mb-1">
                                    <span>{userData.public_repos}</span>
                                    <FaGlobe className="inline" size={16} />
                                </div>
                                <div className="text-sm text-[var(--color-text)] flex items-center justify-center">
                                    <FaCodeBranch className="mr-1" /> Public Repos
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-[var(--color-background)] p-4 rounded-lg text-center">
                                <div className="flex flex-row space-x-2 items-center font-bold text-2xl text-cyan-400 mb-1">
                                    <span>{userData.total_private_repos}</span>
                                    <FaLock className="inline" size={16} />
                                </div>
                                <div className="text-sm text-[var(--color-text)] flex items-center justify-center">
                                    <FaCodeBranch className="mr-1" /> Private Repos
                                </div>
                            </div>
                            <div className="bg-[var(--color-background)] p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-indigo-400 mb-1">
                                    {userData.followers}
                                </div>
                                <div className="text-sm text-[var(--color-text)] flex items-center justify-center">
                                    <FaUserFriends className="mr-1" /> Followers
                                </div>
                            </div>
                            <div className="bg-[var(--color-background)] p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-indigo-400 mb-1">
                                    {userData.following}
                                </div>
                                <div className="text-sm text-[var(--color-text)] flex items-center justify-center">
                                    <FaUserFriends className="mr-1" /> Following
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GitHubCalendar username={userData.login} />

                {/* Top Repositories */}
                {starredRepos.length > 0 && (
                    <div className="bg-[var(--color-card)] border border-[var(--color-line)] rounded-lg p-6 shadow">
                        <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                            Public Repositories
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {starredRepos.map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col justify-between bg-[var(--color-background)] p-4 rounded-lg hover:opacity-80 transition-colors"
                                >
                                    <div className="flex flex-col">
                                        <h4 className="font-medium text-indigo-400">{repo.name}</h4>
                                        <p className="text-sm text-[var(--color-text-dim)] line-clamp-2 h-10 mt-1">
                                            {repo.description || "No description provided"}
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-2 text-xs text-[var(--color-text)]">
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
                                                <span>{repo.language}</span>
                                            </span>
                                        )}
                                        <span className="flex items-center space-x-1">
                                            <StarIcon className="size-4 text-gray-400" />
                                            <span>{repo.stargazers_count}</span>
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
        </div>
    );
};

export default GitHubPage;
