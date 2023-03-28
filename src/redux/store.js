import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import meReducer from './meSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    me: meReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from "./slices/auth";
// import messageReducer from "./slices/message";

// const reducer = {
//   auth: authReducer,
//   message: messageReducer
// }

// const store = configureStore({
//   reducer: reducer,
//   devTools: true,
// })

// export default store;