import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
	const dispatch = useDispatch();
	const { greeting, error, loading } = useSelector((state) => state.greeting);
	const handleClick = () => {
		dispatch(fetchGreeting());
	};

	return (
		<React.Fragment>
			<h1>{greeting.greeting}</h1>
			<button onClick={handleClick}>
				{loading ? 'Loading...' : 'Fetch Greeting'}
			</button>
			<p>{error}</p>
		</React.Fragment>
	);
};

export default Greeting;
