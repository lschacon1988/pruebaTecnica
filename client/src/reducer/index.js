const initialState = {
  reverce: [],
  err: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TEXT": {
      let newState = state.reverce;
      
      return {        
        reverce: [...newState, payload],
      };
    }
    case "ERROR": {
      console.log("ESTO ES REDUCER ERROR", payload);
      return {
        ...state,
        err: payload,
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
