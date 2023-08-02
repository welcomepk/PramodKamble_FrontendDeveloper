import { configureStore } from '@reduxjs/toolkit'
import capsulesReducer from './capsules/capsulesSlice'

export const store = configureStore({
    reducer: {
        capsules: capsulesReducer,

        // other reducres will go here
        // rockets: rocketsReducer,
    },
})

