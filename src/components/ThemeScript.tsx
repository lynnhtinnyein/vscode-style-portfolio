export function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (theme === 'dark' || (!theme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'creative') {
                  document.documentElement.setAttribute('data-theme', 'creative');
                }
              } catch (e) {}
            })();
          `,
            }}
        />
    );
}
