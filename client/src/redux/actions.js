export const getRequestHorses = () => ({
  type: 'GET_REQUEST_HORSES'
});

export const getFailureHorses = err => ({
  type: 'GET_FAILURE_HORSES',
  err
});

export const getSuccessHorses = data => {
  return {
    type: 'GET_SUCCESS_HORSES',
    data
  };
};

export const getHorses = options => async dispatch => {
  //dispatch(getRequestHorses());
  const { socket } = options;
  delete options.socket;
try {
    // Emit the request to the back-end via the socket.
    socket.emit('start', options);
   } catch (err) {
    dispatch(getFailureHorses(err));
   }
};



