import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
//import { rootReduser } from './redusers/reduser'
import FormSliceReduser from './redusers';
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from '@reduxjs/toolkit'; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

//const middlewareLoger = [...getDefaultMiddleware(),loger]

//const rootReducer = combineReducers({Person: PersonSliceReduser, phone: PhoneSliceReduser})


const persistConfig = {
  key: 'root',
  storage,
} 

const persistedReducer = persistReducer(persistConfig, FormSliceReduser)



const store = configureStore({
  reducer: {
hospital: persistedReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // middleware,
})
export const persistor=persistStore(store)

export default store;