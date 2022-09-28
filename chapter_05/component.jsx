// 리액트는 컴포넌트의 재사용을 통해 유지 보수

const { Profiler } = require("react");

// props는 컴포넌트에 들어가는 input(특성) 이라고 생각하면 됨.
// 붕어빵으로 비유하면 팥, 슈크림

// props는 읽기 전용 = 값을 변경 X = element의 불변성과도 연결
// 함수의 순수성을 지키기 위함

// function이 input을 수정하지 않음 = pure
function sum(a, b) {
    return a + b;
}

// function이 input을 수정 = impure
function withdraw(account, amount) {
    account.total -= amount;
}

// App 컴포넌트 내부에 Profile 컴포넌트 사용
// Profile 내부에는 name, introduction, viewCount라는 props가 존재
function App(props) {
    return (
        <Profile
            name = "소플"
            introduction = "안녕하세요, 소플입니다."
            viewCount={1500}
        />
    );
}

// header와 footer, width, height를 props로 갖고 있는 컴포넌트
function App(props) {
    return (
        <Layout
            width={2560}
            height={1440}
            header = {
                <Header title="소플의 블로그입니다." />
            }
            footer = {
                <Footer />
            }
        />
    );
}

// 23 ~ 31 코드의 profile을 리액트로 표현 (createElement)
React.createElement(
    Profile,
    {
        name : "소플",
        introduction : "안녕하세요, 소플입니다.",
        viewCount : 1500
    },
    null
);

// 클래스 컴포넌트
// 컴포넌트 이름은 할상 대문자로 시작하여야 함
class Welcome extends React.Component {
    render() {
        return <h1>안녕, {this.props.name}</h1>;
    }
}

// 컴포넌트를 통해 엘리먼트 제작, 렌더링
const element = <Welcome name="인제" />;
ReactDOM.render (
    element, 
    document.getElementById('root')
);

// 컴포넌트 합성
function App(props) {
    return (
        <div>
            <Welcome name="Mike" />;
            <Welcome name="Steve" />;
            <Welcome name="Jane" />;
        </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);

// 컴포넌트 추출
/*
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
*/

// 1, avatar 추출
function Avatar(props) {
    return (
        <img className="avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
        />
    );
}

// 2. Comment 다시 쓰기
/*
function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author}/>
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
*/

// 3. UserInfo 추출
function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}

// 4. Comment 다시 쓰기
function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author}/>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}