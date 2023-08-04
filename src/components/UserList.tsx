import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../users/actions";
import {  User, UsersState } from "../users/types"
import UserItem from "../components/UserItem";
import { ThunkDispatch } from "redux-thunk";

const UserList: React.FC = () => {
  const dispatch: ThunkDispatch<UsersState, void, any> = useDispatch();
  const users: UsersState["users"] = useSelector((state: UsersState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // const { users, loading, error } = usersState;

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      {JSON.stringify(users)}
      {/* {usersState.users.map((user: User) => (
        <UserItem key={user.user_id} user={user} />
      ))} */}
    </div>
  );
};

export default UserList;
