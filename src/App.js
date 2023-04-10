import React from "react";
import './styles/app.scss';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import useCatalogData from "../src/custom-hooks/useCatalogData";
import { setWomazingData } from "../src/redux-store/firebaseDataSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();
    const womazing = useCatalogData('womazing');
    // console.log(womazing);

    useEffect(() => {
        dispatch(setWomazingData(womazing));
      }, [dispatch, womazing]);

    //   const womazingData = useSelector((state) => state.firebaseData.value)
    //   console.log(womazingData);

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
