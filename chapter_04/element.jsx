function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    )
}

function ConfirmDialog(props) {
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <Button color='green'>확인</Button>
        </div>
    )
}

/*
// ConfirmDialog의 element 형태
{
    type : 'div',
    props : {
        children : [
            {
                type : 'p',
                props : {
                    children : "내용을 확인하셨으면 확인 버튼을 눌러주세요."
                }
            },
            {
                type : 'Button',
                props : {
                    className : 'bg-green',
                    children : {
                        type : 'b',
                        props : {
                            children : '확인'
                        }
                    }
                }
            }
        ]
    }
}
*/

// Component는 설계도이며, element는 도면대로 만들어진 건축물
// Element는 불변성을 가짐. 즉, 생성 후에는 변화 X

// 렌더링 기본 문법
const element = <h1>안녕, 리액트!</h1>
ReactDom.render(element, document.getElementById('root'));

// 렌더링 된 엘리먼트 업데이트 -> 엘리먼트는 불변성을 가지므로 바꿔치기
function tick() {
    // element를 생성하고
    const element = (
        <div>
            <h1>안녕, 리액트</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    // 이를 렌더링 하는 함수
    ReactDom.render(element, getElementById('root'));
}
// 이를 1초의 틱을 줘서 실행
setInterval(tick, 1000);

