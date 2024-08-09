import React, {FC} from 'react';
import IPost from "@/models/IPost";

interface IProps {
    post:IPost
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;