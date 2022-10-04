import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";;

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    
    // input이 비어있을 경우
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000; // 세자리 수 까지만 출력 되도록 정리
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c"); // 섭씨가 디폴트

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale == "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale == "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    // 하위 컴포넌트로 온도와 온도 변화를 반영해줄 함수 전달
    return (
        <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    )
}

export default Calculator;