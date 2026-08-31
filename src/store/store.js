import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./property-reducer";

export const store = configureStore({
  reducer: {
    properties: propertyReducer,
  },
});
