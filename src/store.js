import { configureStore } from "@reduxjs/toolkit";
import OrganizationReducer from "./redux/organizationSlice";
import DevicesReducer from './redux/devicesSlice'
const store = configureStore({
  reducer: {
    organization: OrganizationReducer,
    devices: DevicesReducer,
  },
});

export default store;
