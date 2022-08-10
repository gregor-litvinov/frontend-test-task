
const initialState = {
  horses: [],
  isFetching: true,
  error: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REQUEST_HORSES':
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case 'GET_SUCCESS_HORSES':
      return {
        ...state,
        horses: action.data,
        isFetching: false
      };
    case 'GET_FAILURE_HORSES':

      return {
        ...state,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
};