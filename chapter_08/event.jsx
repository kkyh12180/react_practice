/*
// DOM에서 클릭을 처리하는 예제
<button onclick="activate()">
    Activate
</button>

// React에서 클릭 처리
<button onClick={Activate}>
    Activate
</button>
*/

class Toggle extends React.Component {
    constructor(props) {
        super (props);

        this.state = {isToggleOn: true};
        // callback에서 this를 사용하기 위해서는 binding 필수
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

function Toggle(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? '켜짐' : '꺼짐'}
        </button>
    )
}

// Argument 전달
/*
<button onclick={(event) => this.deleteItem(id, event)}>삭제하기</button>
<button onclick={this.deleteItem.bind(this, id)}>삭제하기</button>
*/

function MyButton(props) {
    const handleDelete = (id, event) => {
        console.log(id, event.target);
    };

    return (
        <button onClick={(event) => handleDelete(1, event)}>삭제하기</button>
    )
}