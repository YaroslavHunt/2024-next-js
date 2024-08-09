import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

const UserPage = ({searchParams}:Params) => {

    let user = JSON.parse(searchParams.data);

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
        </div>
    );
};

export default UserPage;