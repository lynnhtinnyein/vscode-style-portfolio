import SourceControlIcon from "@public/icons/vs-code-icons/SourceControlIcon";

const GithubLinkButton = () => {
    return (
        <a
            href="https://github.com/lynnhtinnyein/vscode-style-portfolio"
            className="flex items-center justify-center cursor-pointer h-12 text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
            target="_blank"
        >
            <SourceControlIcon />
        </a>
    );
};

export default GithubLinkButton;
