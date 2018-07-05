import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'
const initialState = {
    comments: [],
    users: []
};

// function reducer(state, action) {
//     if(!state) {
//         return initialState;
//     } else {
//         return state;
//     }
// }

function reducer(state = initialState, action) {
    return state;
}

switch(action.type) {
    case ADD_COMMENT:
        return Object.assign({}, state, {
            comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
        });
    case REMOVE_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.filter(comment => comment.id !== action.id)
        });
    case EDIT_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.filter(comment => {
                if(comment.id !== action.id){
                    comment.text = action.text;
                }
            })
        });
    case THUMB_UP_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.filter(comment => {
                if(comment.id !== action.id){
                    comment.vote ++;
                }
            })
        });
    case THUMB_DOWN_COMMENT:
        return Object.assign({}, state, {
            comments: state.comments.filter(comment => {
                if(comment.id !== action.id){
                    comment.vote --;
                }
            })
        });
    default:
        return state;
}