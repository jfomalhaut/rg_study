import React from 'react';

const List = ({ history }) => {

	const goHome = () => {
		history.push('/home');
	};

	return (
		<div>
			<h1>List Component</h1>
			<button onClick={goHome}>goHome</button>
		</div>
	);
};

export default List;
