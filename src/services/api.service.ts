import IUser from "@/models/IUser";
import IPost from "@/models/IPost";

const getAllUsers = async (): Promise<IUser[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users',
        {
            // cache: "no-cache",
            next:{
                revalidate: 60*60*24
            }
        })
        .then(res => res.json());
    return response;
}

const getPostsOfUser = async (id: number): Promise<IPost[]> => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(res => res.json());
    return response;
}

export {
    getAllUsers,
    getPostsOfUser
}