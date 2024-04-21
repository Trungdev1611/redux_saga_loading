const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "DataAPI":
      return { ...state, data: action.payload.data };

    case "callApifail":
      return { ...state, data: null };
    default:
      return state;
  }
};

export default reducer;
