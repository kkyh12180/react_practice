// state : 리액트 컴포넌트의 상태, state 자체로 자바스크립트 객체
// 렌더링, 데이터 흐름에 사용되는 값만 포함 시켜야함.

// 생성자를 통해  state를 정의
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked : false
        };
    }
}

// state의 수정 -> setState를 통해 수정 = 직접적인 변경 불가
this.setState({
    name: "Inje"
});

// 리액트 컴포넌트의 생명주기
// 1. 컴포넌트 생성 = 마운트 = 생성자를 통해 state 정의 = componentDidMount() 호출
// 2. setState 등으로 state가 변함 = update = componenetDidUpdate() 호출
// 3. 컴포넌트가 더 이상 표시 X = 언마운트 = componentWillUnmount() 호출