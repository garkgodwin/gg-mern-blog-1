import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signout, refreshAccess } from "../../api/authApi";
import { setAuthToken } from "../../api/axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await signin(formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);
export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, { rejectWithValue }) => {
    try {
      const res = await refreshAccess();
      return res.data;
    } catch (err) {
      return rejectWithValue("You are forbidden");
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await signout();
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(
        err.response?.data?.message || "Logout failed"
      );
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  id: null,
  username: "",
  email: "",
  roles: [],
  accessToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    something: (state) => {
      console.log("lol");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.roles = action.payload.roles;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        setAuthToken(action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.roles = action.payload.roles;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        setAuthToken(action.payload.accessToken);
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        setAuthToken(null);
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.id = null;
        state.username = "";
        state.email = "";
        state.roles = [];
        state.accessToken = null;
        state.isAuthenticated = false;
        setAuthToken(null);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { something } = authSlice.actions;
export default authSlice.reducer;
