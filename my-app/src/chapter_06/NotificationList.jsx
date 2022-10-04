import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "아침먹고 땡",
    },
    {
        id: 2,
        message: "점심먹고 땡",
    },
    {
        id: 3,
        message: "저녁먹고 땡",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;

        // 1초마다 reservedNotification을 가져와서 notifications 배열에 업데이트
        timer = setInterval( () => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);

                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications : [],
                });
                clearInterval(timer);
            }
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                    <Notification key={notification.id} id={notification.id} message={notification.message} />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;