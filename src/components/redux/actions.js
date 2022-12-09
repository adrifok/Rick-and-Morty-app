import { ADD_FAVORITES , DELETE_FAVORITES , FILTER , ORDER} from "./types";

export function addFavorites (id){  //o (char)???
    return{
        type : ADD_FAVORITES,
        payload : id,    // o char ??
    }
}

export function deleteFavorites (id){
    return{
        type : DELETE_FAVORITES,
        payload : id,
    }
}

export function filterCards (status){
    return{
        type : FILTER,
        payload : status,
    }
}

export function orderCards (id){
    return{
        type : ORDER, 
        payload : id,
    }
}
