function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="Blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

function WelcomeDialog(props) {
    return (
        <Dialog title="어서 오세요" message="우리 사이트에 오신 것을 환영합니다!">
            <h1>children에 해당하는 부분</h1>
        </Dialog>
    );
}