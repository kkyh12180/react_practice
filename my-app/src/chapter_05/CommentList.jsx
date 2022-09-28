import React from "react";
import Comment from "./Comment";

// 동적으로 Comment 만들어주기
const comments = [
    {
        name: "Hyo",
        comment: "안녕하세요~",
    },
    {
        name: "YH",
        comment: "리액트 신기하네~",
    },
    {
        name: "익명",
        comment: "배고파",
    },
];

function CommentList(props) {
    return (
        <div>
            { // 람다식인가?
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;