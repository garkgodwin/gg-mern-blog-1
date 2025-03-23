import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBlog, getCategories } from "../../api/blogApi";

export const createBlogThunk = createAsyncThunk(
  "blog/createBlog",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await createBlog(formData);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Blog Creation Failed"
      );
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  "blog/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategories();
      return response.data.categories;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Get Categories Failed"
      );
    }
  }
);
const initialState = {
  loading: false,
  error: null,
  categories: null,
  newBlogCreated: null,
  blogs: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    something: (state) => {
      console.log("lol");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlogThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.newBlogCreated = null;
      })
      .addCase(createBlogThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.newBlogCreated = action.payload;
      })
      .addCase(createBlogThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.newBlogCreated = null;
      })
      // GET CATEGORIES
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.categories = null;
      });
  },
});

// Action creators are generated for each case reducer function
export const { something } = blogSlice.actions;
export default blogSlice.reducer;
