import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import firebaseDataReducer from "./firebaseDataSlice";


// export const store = configureStore({reducer: rootReducer});

export const store = configureStore({
    reducer: {
        firebaseData: firebaseDataReducer,
    },
})