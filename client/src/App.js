import React, { useEffect, useMemo } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import openSocket from 'socket.io-client';
import store from './redux/store'
import * as Actions from './redux/actions'


function App() {
  const horses = useSelector((state) => state.horses)
  const dispatch = useDispatch()
  const socket = useMemo(() => openSocket('http://localhost:3002'),[])

  useEffect(() => {
    socket.on('GET_SUCCESS_HORSES', data => {
      store.dispatch(Actions.getSuccessHorses(data));
    });
    socket.on('GET_FAILURE_HORSES', err => {
      store.dispatch(Actions.getFailureHorses(err));
    });

  },[socket, dispatch])

  useEffect(() => {
    dispatch(Actions.getHorses({socket}))
  }, [dispatch, socket])
  return (
    <div className="App">
     {(horses || []).map((horse) => {
       return (
         <div>
        <div>{horse.name}</div>
       <div>{horse.distance}</div>
       </div>
       )
     }
     )}
    </div>
  );
}

export default App;
