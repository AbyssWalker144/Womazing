//пример из урока react redux 46:30

import {combineReducers} from "redux";
import {firebaseReducer} from "./firebaseReducer"

export const rootReducer = combineReducers({
    firebaseData: firebaseReducer,
})


// const initialState = 2;
//
// const rootReducer = (state = initialState, action) => {
//   switch (action.type){
//   //  условия
//   }
//   return state;
// };
//
// export default rootReducer;