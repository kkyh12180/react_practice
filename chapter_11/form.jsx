// 제어 컴포넌트를 이용해 모든 데이터를 state에서 관리
function NameFoom(props) {
    const[value, setValue] = useState('');

    // 변경된 값을 value에 저장
    // event.target.value = input element의 value
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // 버튼을 눌렀을 때 고유 동작을 막아줌
    const handleSubmit = (event) => {
        alert('입력한 이름 : ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

function FruitSelect(props) {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('선택한 과일 : ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요 : 
                <select value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </label>
        </form>
    );

    // 다중 선택이 가능하게 하고 싶으면
    // <select multiple={true} value={['B', 'C']}>
}

// 파일 input
// <input type="file" />

function Reservation(props) {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부 :
                <input
                    type="checkbox"
                    checked={(event) => {
                        setHaveBreakfast(event.target.checked);
                    }} />
            </label>
            <br/>
            <label>
                방문객 수 : 
                <input
                    type="number"
                    value={numberOfGuest}
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}

// inpur null value
// input value가 hi로 고정되어 있어 입력 불가
ReactDOM.render(<input value="hi" />, rootNode);

// 1초 뒤에 null로 변경되어서 입력 가능해짐
setTimeout(function() {
    ReactDOM.render(<input value={null} />, rootNode);
}, 1000);