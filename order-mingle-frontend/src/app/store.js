import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getdefaultMiddlewares) =>
    getdefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
