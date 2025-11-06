import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    await new Promise(r => setTimeout(r, 650));
    if (email === "demo@brainybeam.com" && password === "demo123") {
      return { name: "Arun Tomar", email, token: "fake-jwt-token" };
    }
    return rejectWithValue("Invalid email or password");
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (s) => { s.isAuthenticated = false; s.user = null; s.token = null; s.error = null; },
    clearError: (s) => { s.error = null; },
  },
  extraReducers: (b) => {
    b.addCase(loginUser.pending, s => { s.loading = true; s.error = null; })
     .addCase(loginUser.fulfilled, (s, a) => {
       s.loading = false;
       s.isAuthenticated = true;
       s.user = a.payload;
       s.token = a.payload.token;
     })
     .addCase(loginUser.rejected, (s, a) => {
       s.loading = false;
       s.error = a.payload;
     });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
