import { createSlice } from '@reduxjs/toolkit';
import useCatalogData from '../custom-hooks/useCatalogData';


export const firebaseDataSlice = createSlice({
    name: 'womazingData',
    initialState: {
        value: '',
    },
    reducers: {
        setData: (state) => {
            
        }
    }
})

export const { downloadData } = firebaseDataSlice.actions;

export default firebaseDataSlice.reducer;  