import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provinsi: null,
  kabKota: null,
  kecamatan: null,
  desa: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProvinsi: (state, action) => {
      state.provinsi = action.payload;
    },
    setKabKota: (state, action) => {
      state.kabKota = action.payload;
    },
    setKecamatan: (state, action) => {
      state.kecamatan = action.payload;
    },
    setDesa: (state, action) => {
      state.desa = action.payload;
    },
  },
});

export const { setProvinsi, setKabKota, setKecamatan, setDesa } =
  appSlice.actions;

export default appSlice.reducer;
