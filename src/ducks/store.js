import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import CounterSlice from "./CounterSlice";  
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: CounterSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
    
});
sagaMiddleware.run(rootSaga);