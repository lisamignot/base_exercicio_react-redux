import { configureStore } from '@reduxjs/toolkit'

import lojaReducer from './reducers/loja'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    loja: lojaReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

//rootreducer = centralizador de reducers da aplicação
