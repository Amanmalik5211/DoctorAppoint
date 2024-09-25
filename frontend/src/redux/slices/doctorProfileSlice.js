import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, token } from '../../config';

export const fetchDoctorProfile = createAsyncThunk(
  'doctorProfile/fetchProfile',
  async () => {
    const response = await fetch(`${BASE_URL}/doctors/profile/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
  }
);

// Thunk to update doctor profile data
export const updateDoctorProfile = createAsyncThunk(
  'doctorProfile/updateProfile',
  async (formData) => {
    const response = await fetch(`${BASE_URL}/doctors/${formData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  }
);

const doctorProfileSlice = createSlice({
  name: 'doctorProfile',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetching profile
    builder.addCase(fetchDoctorProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDoctorProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(fetchDoctorProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Handle updating profile
    builder.addCase(updateDoctorProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateDoctorProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(updateDoctorProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default doctorProfileSlice.reducer;
