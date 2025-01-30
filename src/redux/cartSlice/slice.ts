import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitState, InitStateTypes, RouteRedux } from './types';

const initialState: InitState = {
    name: '',
    description: '',
    background: '',
    route: '',
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action: PayloadAction<InitStateTypes>) => {
            state.name = action.payload.name;
            state.description = action.payload.description;
            state.background = action.payload.background;
        },

        addRoute: (state, action: PayloadAction<RouteRedux>) => {
            state.route = action.payload.route;
        },
    },
});

export const { updateCart, addRoute } = cartSlice.actions;

export default cartSlice.reducer;
