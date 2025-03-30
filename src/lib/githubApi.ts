import { unstable_cache } from "next/cache";

export const fetchGitHubData = unstable_cache(
    async () => {
        try {
            const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

            if (!token) {
                throw new Error("GITHUB_TOKEN environment variable is not set");
            }

            const userResponse = await fetch("https://api.github.com/user", {
                headers: {
                    Authorization: `token ${token}`,
                },
            });

            if (!userResponse.ok) {
                throw new Error(`GitHub API error: ${userResponse.statusText}`);
            }

            const userData = await userResponse.json();

            const reposResponse = await fetch("https://api.github.com/user/repos?per_page=100", {
                headers: {
                    Authorization: `token ${token}`,
                },
            });

            if (!reposResponse.ok) {
                throw new Error(`GitHub API error: ${reposResponse.statusText}`);
            }

            const allRepos = await reposResponse.json();
            const publicRepos = allRepos.filter((repo) => !repo.private);

            const languages = {};
            let totalSize = 0;

            allRepos.forEach((repo) => {
                if (repo.language) {
                    totalSize += repo.size;
                }
            });

            allRepos.forEach((repo) => {
                if (repo.language) {
                    languages[repo.language] =
                        (languages[repo.language] || 0) + (repo.size / totalSize) * 100;
                }
            });

            Object.keys(languages).forEach((lang) => {
                languages[lang] = Math.round(languages[lang] * 10) / 10;
            });

            const githubData = {
                userData,
                repos: publicRepos,
                languageStats: languages,
            };
            return githubData;
        } catch (error) {
            console.error("Error fetching GitHub data:", error);
            return null;
        }
    },
    ["github"],
    { revalidate: 3600, tags: ["github"] }
);
