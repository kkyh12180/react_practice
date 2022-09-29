import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다,`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

function TextInputWithFocusButton(props) {
    const inputElem = useRef(null);

    const onButtonClick = () => {
        // 'current'는 마운트 된 input element를 가리킴
        inputElem.current.focus();
    };

    return (
        <>
            <input ref={inputElem} type='text' />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
