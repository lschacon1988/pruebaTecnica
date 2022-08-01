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
