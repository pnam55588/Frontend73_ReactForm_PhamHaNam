import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './accountReducer';
const store = configureStore({
    reducer: {
        
        accountReducer: accountReducer
    }
})

export default store