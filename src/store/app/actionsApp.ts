import { createAction } from "@reduxjs/toolkit";
import { devises } from "./reducerApp";

export const detectTypeOfDevise = createAction('@@app/RESIZE', (typeOfDevise: devises) => ({
    payload: typeOfDevise
}))