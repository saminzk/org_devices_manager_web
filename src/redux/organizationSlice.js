import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// "https://jsonplaceholder.typicode.com/todos"

const initialState = {
  loading: false,
  organizations: [],
  error: "",
};

export const fetchOrganization = createAsyncThunk(
  "organization/fetchOrganization",
  () => {
    return (
      axios
        .get("http://localhost:8080/org")
        // .then((response) => response.data.map((user) => console.log(user)));
        .then((response) => response.data)
    );
  }
);

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchOrganization.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchOrganization.fulfilled, (state, action) => {
      state.loading = false;
      state.organizations = action.payload;
      state.error = "";
    });
    builder.addCase(fetchOrganization.rejected, (state, action) => {
      state.loading = false;
      state.organizations = [];
      state.error = action.error.message;
    });
  },
});

export default organizationSlice.reducer;
