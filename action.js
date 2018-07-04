const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4()
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4()
    }
}

//Bounde action creator
const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (id, text) => dispatch(editComment(id, text));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

//Examples

boundAddComment('to jest nowy komentarz');
boundRemoveComment(id);
boundEditComment(6, 'edycja komentara o id 6');
boundThumbUpComment(7);
boundThumbDownComment(4);
