import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = { key: "auth", storage };
const persistedAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedAuth },
  middleware: (getDefault) => getDefault({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
