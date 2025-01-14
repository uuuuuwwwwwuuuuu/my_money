import React, { useEffect } from "react";
import "./App.scss";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../../styled";
import HomePage from "../HomePage/HomePage";
import useScreenSize from "../../detectScreenSize";
import { useAppDispatch } from "../../hook";
import { detectTypeOfDevise } from "../../store/app/actionsApp";


function App() {
    const screenSize = useScreenSize();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (screenSize.width <= 390) {
            dispatch(detectTypeOfDevise('mobile'));
        } else if (screenSize.width > 390 && screenSize.width <= 768) {
            dispatch(detectTypeOfDevise('pad'));
        } else {
            dispatch(detectTypeOfDevise('desktop'));
        }
    }, [screenSize.width, dispatch]);


    return (
        <ThemeProvider theme={baseTheme}>
            <div className="app">
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
