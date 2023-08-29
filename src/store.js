import { configureStore } from "@reduxjs/toolkit";
import OrganizationReducer from "./redux/organizationSlice";
const store = configureStore({
  reducer: {
    organization: OrganizationReducer,
  },
});

export default store;
