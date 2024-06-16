import { configureStore } from "@reduxjs/toolkit";

import profileReducer from "./Slice/ProfileSlice/ProfileSlice";

export const store = configureStore({
  reducer: {
    Profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["profile/profileRefetch"],
        ignoredPaths: ["profile.profileRefetchFunction"],
      },
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
