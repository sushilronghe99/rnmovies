
import * as Actions from '../action/ActionType';
const initialState = {
    favorites: [],
}
//export default reducer
function reducerObj(state = initialState, action) {
    console.log("In here", action);
    switch (action.type) {

        case Actions.ADD_FAVORITE:
            return { ...state, favorites: [...state.favorites, action.payload] };
        case Actions.REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    movie => movie.imdbID !== action.payload.imdbID,
                ),
            };
        default:
            return state;
    }
}
export default reducerObj;
   // return state;
