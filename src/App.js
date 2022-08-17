import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import { fetchGreeting } from './redux/greetingSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <Greeting />;
};

export default App;
