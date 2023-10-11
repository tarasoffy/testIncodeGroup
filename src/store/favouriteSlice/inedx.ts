import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavouriteState {
    favourite: Array<any>
}

const initialState: FavouriteState = {
  favourite: [],
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action) => {
        const found = state.favourite.find(item => item.name === action.payload.name)
        if(found) {
            const newData = state.favourite.filter(item => item.name !== action.payload.name)
            state.favourite = newData
        } else {
            state.favourite.push(action.payload)
        }
    },
    resetFavourites: (state, action) => {
        state.favourite = []
    }
  },
})

export const { addToFavourite, resetFavourites} = favouriteSlice.actions
export default favouriteSlice.reducer