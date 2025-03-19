import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signin, refreshAccess } from "../../api/authApi";
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
      return res.data; // { token }
    } catch (err) {
      return rejectWithValue("Refresh token expired");
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
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
        setAuthToken(null);
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
        state.isAuthenticated = false;
        setAuthToken(null);
      })
      .addCase(refreshAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
        setAuthToken(null);
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
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;
export default authSlice.reducer;
