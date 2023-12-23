const initialState = {
  provinsi: null,
  kabKota: null,
  kecamatan: null,
  desa: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROVINSI":
      return { ...state, provinsi: action.payload };
    case "SET_KAB_KOTA":
      return { ...state, kabKota: action.payload };
    case "SET_KECAMATAN":
      return { ...state, kecamatan: action.payload };
    case "SET_DESA":
      return { ...state, desa: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
