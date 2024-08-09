import React, {FC} from 'react';
import IUser from "@/models/IUser";
import Link from "next/link";

interface IProps {
    user: IUser;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <div><Link href={{pathname: '/users/' + user.id, query: {data: JSON.stringify(user)}}}>{user.username}</Link></div>
        </div>
    );
};

export default UserComponent;