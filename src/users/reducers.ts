import { UsersActionTypes, UsersState } from "./types";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action: any): UsersState => {
    switch (action.type) {
      // FETCH
      case UsersActionTypes.FETCH_USERS_REQUEST:
        return { ...state, loading: true, error: null };
      case UsersActionTypes.FETCH_USERS_SUCCESS:
        console.log("FETCH_USERS_SUCCESS")
        console.log(action.payload)
        // users: action.payload,
        return { ...state,  loading: false, error: null };
      case UsersActionTypes.FETCH_USERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      // CREATE
      case UsersActionTypes.CREATE_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case UsersActionTypes.CREATE_USER_SUCCESS:
        return { ...state, users: [...state.users, action.payload], loading: false, error: null };
      case UsersActionTypes.CREATE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      // UPDATE
      case UsersActionTypes.UPDATE_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case UsersActionTypes.UPDATE_USER_SUCCESS:
        const updatedUsers = state.users.map((user) =>
          user.user_id === action.payload.user_id ? action.payload : user
        );
        return { ...state, users: updatedUsers, loading: false, error: null };
      case UsersActionTypes.UPDATE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      // DELETE
      case UsersActionTypes.DELETE_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case UsersActionTypes.DELETE_USER_SUCCESS:
        const deletedUserId = action.payload;
        const filteredUsers = state.users.filter((user) => user.user_id !== deletedUserId);
        return { ...state, users: filteredUsers, loading: false, error: null };
      case UsersActionTypes.DELETE_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export default userReducer;