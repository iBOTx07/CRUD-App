import React from "react";
import { useDispatch} from "react-redux";
import { User } from "../users/types";
import { deleteUser } from "../users/actions";
import { AppDispatch } from "../redux/store";

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleDelete = () =>{
        dispatch(deleteUser(user.user_id))
    };


    return (
        <div>
            <p>User Id: {user.user_id}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => console.log("Update click for user with ID: ", user.user_id)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default UserItem;