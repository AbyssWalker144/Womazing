import React from "react";
import './styles/app.scss';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <main>
                <div className="container">
                    <AppRouter />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
