import React, { useState } from 'react';

function Home({ history }) {
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(false);

	const increasement = () => {
		setCount(count + 1);
	};

	const decreasement = () => {
		setCount(prev => prev - 1);
	};
	
	const onToggleHandler = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={decreasement}>-감소</button>
			<button onClick={increasement}>+증가</button>
			<button onClick={onToggleHandler}>Toggle</button>
			{toggle && (
				<h1>
					<b>보이다</b>
				</h1>
			)}
		</div>
	);
};

export default Home;