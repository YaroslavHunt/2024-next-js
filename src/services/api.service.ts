import IUser from "@/models/IUser";

const getAllUsers = async (): Promise<IUser[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
    return response;
}

export default getAllUsers;