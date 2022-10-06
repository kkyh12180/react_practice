const scaleNames =  {
    c : "섭씨",
    f : "화씨",
};

// 온도를 입력받기 위한 컴포넌트
// 온도를 출력해주는 하위 컴포넌트
function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력해주세요 (단위 : {scaleNames[props.scale]}) : </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;