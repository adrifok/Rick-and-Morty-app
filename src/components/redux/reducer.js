import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from './types'

const initialState = {
    myFavorites : [],
    allCharacters:[]
};

export default function rootReducer(state= initialState,{ type, payload}){
    switch (type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites : [...state.allCharacters, payload],
                allCharacters : [...state.allCharacters, payload]
            }
        case DELETE_FAVORITES:   
            const filtered = state.myFavorites.filter (
                fav => fav.id !== payload
            )
            return {
                ...state,
                myFavorites : filtered
          
            }
            case FILTER:   
            const filterCopy = [...state.allCharacters]
            const filter = filterCopy.filter(ch => ch.gender === payload)
            return {
                ...state,
                myFavorites : filter
           
            }

            case ORDER:
                const orderCopy = [...state.allCharacters]
                    const order = orderCopy.sort((a, b) => {
                        if(payload === "Ascendente") return a.id - b.id
                         else { return b.id - a.id}
                    })
                return{
                    ...state,
                    myFavorites: order
                }
    
        default:
            return state;
           
    }
  }
  
 


            // case ORDER:   
            // const orderCopy = [...state.allCharacters]
            // const order = orderCopy.sort ()
            //     return {
            //         ...state,
            //         myFavorites : order
                
            // }
            // default:
            // return state;
            // }
        
    // case ORDER:
    //     if(action.payload === 'Ascendente'){
    //         return{
    //             ...state,
    //             myFavorites: state.allCharacters.sort((a, b)=> a.id- b.id)
    //         };
    //     }else{
    //         return{
    //             ...state,
    //             myFavorites: state.allCharacters.sort((a, b)=> b.id- a.id)
    //         };
    //     }
    // default:
    // return state;
    // }}