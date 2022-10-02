// map() 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴
const numbers = [1, 2, 3, 4, 5];
// [2, 4, 6, 8, 10]
const doubled = numbers.map((number) => number * 2);

function NumberList(props) {
    const { numbers } = props;

    const ListItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <ul>{ListItems}</ul>
    )
}

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);