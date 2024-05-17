import { PagesProvider } from "@/context/pages";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
    return (
        <PagesProvider>
            <Component {...pageProps} />
        </PagesProvider>
    );
};

export default App;
