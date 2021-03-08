import React from 'react';
import Test from './components/Test';
import Cup from './components/Cup';

function App() {

	const onClickHandler = (value: string) => {
		console.log('test Button Click : ' + value);
	};

	return (
		<React.Fragment>
			<h1>React + TypeScript + Webpack</h1>
			{/* <Test 
				name={'포도'} 
				price={2000} 
				description={'설명'} 
				onClickHandler={onClickHandler}
			/> */}
			<Cup color={'blue'} volume={200} />
		</React.Fragment>
	);
};

export default App;
