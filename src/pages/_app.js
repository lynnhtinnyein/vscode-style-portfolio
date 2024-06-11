import Root from "@/components/Root";
import { PageControllerProvider } from "@/context/pages";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
    return (
        <PageControllerProvider>
            <Root>
                {/* outlet */}
                <Component {...pageProps} />
                <Analytics/>
            </Root>
        </PageControllerProvider>
    );
};

export default App
