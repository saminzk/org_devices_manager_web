import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  devices: [],
  error: "",
};

export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async () => {
    const response = await axios.get("http://localhost:8080/devices");
    return response.data;
  }
);

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDevices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      (state.loading = false),
        (state.devices = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchDevices.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default devicesSlice.reducer;
