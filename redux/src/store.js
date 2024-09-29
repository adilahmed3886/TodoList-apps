import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './Slice/TodoSlice.'

export const store = configureStore({
    reducer: {
        todos: reducer
    }
})
