import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../components/Api';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await getUsers(5);
    return response;
  } catch (error) {
    return error.response.data;
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;


