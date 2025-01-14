import { createReducer } from "@reduxjs/toolkit";
import { detectTypeOfDevise } from "./actionsApp";

export type devises = 'mobile' | 'pad' | 'desktop';

const initialState: {
    devise: devises
} = {
    devise: 'desktop'
}

const appReducer = createReducer(initialState, (builder) => {
    builder.addCase(detectTypeOfDevise, (state, action) => {
        state.devise = action.payload
    })
})

export default appReducer;