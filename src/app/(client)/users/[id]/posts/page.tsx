import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {getPostsOfUser} from "@/services/api.service";
import PostsComponent from "@/components/posts/PostsComponent";

const PostsPage = async ({searchParams}:Params) => {

    let posts = await getPostsOfUser(searchParams.id);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;