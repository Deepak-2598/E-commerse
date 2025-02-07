import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApiData = createAsyncThunk('api/fetchData', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

const fetchApiDataSlice = createSlice({
    name: 'deeCart',
    initialState: {
        data: [],
        error: null,
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApiData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload; 
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default fetchApiDataSlice.reducer;
