export interface User {
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface UsersState {
    users: User[];
    loading: boolean;
    error: string | null;
}

export enum UsersActionTypes {
    // FETCH
    FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
    // CREATE
    CREATE_USER_REQUEST = "CREATE_USER_REQUEST",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_FAILURE = "CREATE_USER_FAILURE",
    // UPDATE
    UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE",
    // DELETE
    DELETE_USER_REQUEST = "DELETE_USER_REQUEST",
    DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
    DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
  }
  