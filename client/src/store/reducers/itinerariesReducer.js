const initState = {
  itineraries: []
};

const itinerariesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default itinerariesReducer;
