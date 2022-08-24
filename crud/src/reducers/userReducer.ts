import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/userActions";
import { User } from "../interfaces/user"

interface Action {
    type: string,
    payload: User | null
}

const initialStateUser = {
    listUser: [] as User[],
}

export function userReducer(){}