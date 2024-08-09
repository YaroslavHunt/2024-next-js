import React from 'react';
import IUser from "@/models/IUser";
import {getAllUsers} from "@/services/api.service";
import UsersComponent from "@/components/users/UsersComponent";


const UsersPage = async () => {

    let allUsers:IUser[] = await getAllUsers();

    return (
        <div>
            <ul>
                <UsersComponent users={allUsers}/>
            </ul>
        </div>
    );
};

export default UsersPage;