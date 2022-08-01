import axios from "axios";

export const textReverce = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/reverce?text=${text}`
      );
      const { data } = response;
      return dispatch({ type: "TEXT", payload: data });
    } catch (error) {
     
      return dispatch({ type: "ERROR", payload: error.response.data });
    }
  };
};
