export const fetchBooks = (url) => {
  return async (dispatch) => {
    const response = await fetch(url).then((res) =>
      dispatch({ type: "SET_BOOKS", payload: res.data })
    );
  };
};
