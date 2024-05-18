import Root from "@/components/Root";
import { PageControllerProvider } from "@/context/pages";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
    return (
        <PageControllerProvider>
            <Root>
                {/* outlet */}
                <Component {...pageProps} />
            </Root>
        </PageControllerProvider>
    );
};

export default App
