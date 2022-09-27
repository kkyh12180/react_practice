// JSX = syntax extension of JavaScript

// 자바스크립트와 HTML 코드가 결합되어 있는 JSX 코드 예제
// const element = <h1>Hello World!</h1>;

/***********************************************************/

/* JSX Version */
class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDom.render (
    <Hello toWhat = "World"/>,
    document.getElementById('root')
);

/* JavaScript + React Version */
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, 'Hello ${this.props.toWhat}');
    }
}

ReactDom.render (
    React.createElement(Hello, { toWhat : 'World' }, null),
    document.getElementById('root')
);

/***********************************************************/

const element_jsx = (
    <h1 className="greeting">
        Hello, World!
    </h1>
)

const element_react = React.createElement (
    'h1',
    { className: 'greeting' },
    'Hello, World!'
)

// 위의 두 코드는 동일 역할, 위 함수의 호출 결과로 아래와 같은 자바스크립트 객체
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children : 'Hello, World!'
    }
}
// 우리는 이 객체를 엘리먼트라고 부름

/*
    React.createElement (
        type, // HTML 태그나, 다른 리액트 컴포넌트가 올 수 있음
        [props], // 추후 배울 예정
        [...children] // 햔재 엘리먼트가 포함한 자식 엘리먼트
    )
*/

// JSX에서는 큰 따옴표 사이에는 무조건 자바스크립트가 들어간다고 생각