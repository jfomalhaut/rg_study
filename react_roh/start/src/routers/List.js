import React from 'react';

const List = (props) => {
    const goHome = () => {
        props.history.push('/home');
    };

    return (
        <div>
            <h1>List Component</h1>
            <button onClick={goHome}>goHome</button>
        </div>
    );
};

export default List;