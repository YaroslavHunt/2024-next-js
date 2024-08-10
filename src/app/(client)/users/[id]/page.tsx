import React, {FC} from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import UserComponent from "@/components/user/UserComponent";

interface IProps {
    searchParams?: {
        data?: string,
    };
}

const UserPage: FC<IProps> = ({searchParams}) => {

    let user;

    if (searchParams && searchParams.data) {
        user = JSON.parse(searchParams.data);
    }

    return (
        <div>
            <div>{user.id}</div>
            <UserComponent user={user}/>
            <button><Link href={{pathname: '/users/' + user.id + '/posts', query: {id: JSON.stringify(user.id)}}}>posts
                of user</Link>
            </button>
            <div>{user.email}</div>
        </div>
    );
};

export default UserPage;