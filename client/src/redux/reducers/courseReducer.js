const courseReducer = (state={}, action) => {
    switch(action.type){

        case 'MOVIES_LIST':
            return action.payload;

        case 'MOVIES_ITEM':
            return {...state, movieItem: action.payload};

        default:
            return state;

    }
};

export default courseReducer;