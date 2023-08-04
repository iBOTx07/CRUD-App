import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { UsersActionTypes, User } from "./types";

const apiUrl = "http://localhost:8080/user";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: UsersActionTypes.FETCH_USERS_REQUEST });

    try {
      const response = await axios.get<User[]>(apiUrl);
      dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } 
    catch (error) {
      dispatch({ type: UsersActionTypes.FETCH_USERS_FAILURE, payload: "Error fetching users." });
    }

  };
};

export const createUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: UsersActionTypes.CREATE_USER_REQUEST });

    try {
      const response = await axios.post<User>(apiUrl, user);
      dispatch({ type: UsersActionTypes.CREATE_USER_SUCCESS, payload: response.data});
    }
    catch (error) {
      dispatch({ type: UsersActionTypes.CREATE_USER_FAILURE, payload: "Error creating user." });
    }

  };
};

export const updateUser = (user_id: number, updatedUser: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: UsersActionTypes.UPDATE_USER_REQUEST });

    try {
      const response = await axios.put<User>(`${apiUrl}/${user_id}`, updatedUser);
      dispatch({ type: UsersActionTypes.UPDATE_USER_SUCCESS, payload: response.data });
    }
    catch (error) {
      dispatch({ type: UsersActionTypes.UPDATE_USER_FAILURE, payload: "Error updating user."});
    }
  };
};

export const deleteUser = (user_id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: UsersActionTypes.DELETE_USER_REQUEST });

    try {
      await axios.delete(`${apiUrl}/${user_id}`);
      dispatch({ type: UsersActionTypes.DELETE_USER_SUCCESS, payload: user_id});
    }
    catch (error) {
      dispatch({ type: UsersActionTypes.DELETE_USER_FAILURE, payload: "Error deleting user."});
    }

    return { type: "DELETE_USER" };
  };
};