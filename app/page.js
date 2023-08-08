'use client';
import Home from "@/components/Home";
import { GlobalContextProvider } from "@/context/GlobalContext";

const App = () => {
    return (
        <GlobalContextProvider>
            <Home/>
        </GlobalContextProvider>
    )
}

export default App;
