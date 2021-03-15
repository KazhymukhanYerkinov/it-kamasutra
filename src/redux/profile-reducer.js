const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: 'It\'s my first post', likeCount: 8 },
  ],
  newPostText: 'it-kamasutra.com',
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: state.newPostText, likeCount: 0}],
        newPostText: ''
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });

export default profileReducer;