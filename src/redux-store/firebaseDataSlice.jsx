import { createSlice } from '@reduxjs/toolkit';
import useCatalogData from '../custom-hooks/useCatalogData';


export const firebaseDataSlice = createSlice({
    name: 'womazingData',
    initialState: {
        value: '',
    },
    reducers: {
        setWomazingData: (state, action) => {
            state.value = action.payload; 
        }
    }
})

export const { setWomazingData } = firebaseDataSlice.actions;

export default firebaseDataSlice.reducer;  