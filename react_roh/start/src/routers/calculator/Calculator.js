import React from 'react';

const operatorMessages = {
    plus: '더하기 연산자를 선택하셨습니다',
    minus: '빼기 연산자를 선택하셨습니다',
    multiply: '곱샘 연산자를 선택하셨습니다',
    divide: '나눗샘 연산자를 선택하셨습니다',
};

const Calculator = (props) => {
    const {match} = props;
    const message = operatorMessages[match.params.operator];
    return (
        <div>
            {message}
        </div>
    );
};

export default Calculator;