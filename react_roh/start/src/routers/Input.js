import React, {useState} from 'react';

// 과제1 숫자, 글자만 들어가도록 하는걸 작성해보기
// 과제2 React-router-dom 이중 라우터 만들어보기

const field = {
    name: '',
    job: '',
    phone: '',
};

const typeDef = {
    name: 'STRING',
    job: 'STRING',
    phone: 'NUMBER',
};

const verify = (name, value) => {
    let result;
    switch (typeDef[name]) {
        case 'STRING':
            result = true;
            break;
        case 'NUMBER':
            result = !isNaN(value);
            break;
        default:
            break;
    }
    return result;
};


const Input = () => {
    const [info, setInfo] = useState(field);
    const onChangeValue = (e) => {
        const {name, value} = e.target;
        const verification = verify(name, value);
        // 성공
        if (verification) {
            setInfo({
                ...info,
                [name]: value
            });
        }
        // verification 실패
        else {
            e.target.value = e.target.value.slice(0, -1);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <div>
            <form>
                <input placeholder="이름을 입력하세요" name="name" onChange={onChangeValue} type="text"/>
                <input placeholder="직업을 입력하세요" name="job" onChange={onChangeValue} type="text"/>
                <input placeholder="전화번호를 입력하세요" name="phone" onChange={onChangeValue} type="text"/>
                <button onClick={onSubmit}>입력</button>
            </form>
            <ul>
                <li>이름: {}</li>
            </ul>
        </div>

    );
};

export default Input;