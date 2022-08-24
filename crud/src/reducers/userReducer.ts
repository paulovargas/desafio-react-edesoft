import { GET_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from "../actions/userActions";
import { User } from "../interfaces/user"

interface Action {
    type: string,
    payload: User | null
}

const initialStateUser = {
    listUser: [] as User[],
}

export function userReducer( state = initialStateUser, action: Action){
    switch(action.type){
        case GET_USERS:
            return {
                listUser: action.payload,
            }
        case ADD_USER:
            return {
                listUser: [ ...state.listUser, action.payload]
            }
        case DELETE_USER:
            return {
                listUser: state.listUser.filter((item: User) => item.id !== action.payload?.id)
            }
        case UPDATE_USER:
            const newArray = state.listUser.filter((item: User) => item.id !== action.payload?.id)

            return {
                listUser: [ ...newArray, action.payload]
            }
        default:
            return state
    }
}