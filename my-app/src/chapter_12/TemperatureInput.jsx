const ScaleName =  {
    c : "섭씨",
    f : "화씨",
};

// 온도를 입력받기 위한 컴포넌트
// 온도를 출력해주는 하위 컴포넌트
function TemperatureInput(props) {

    // onTemperatureChange는 상위 컴포넌트에서 인자로 받을 예정
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    // state가 아닌 props를 통해 temperature을 받아오기 때문에 이를 컴포넌트로 전달해야 함
    // 그 역할을 하는 함수가 handleChange
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요 (단위 : {ScaleName[props.scale]}) : 
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;