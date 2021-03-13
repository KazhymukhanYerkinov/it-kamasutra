const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'It\'s my first post', likeCount: 8 },
      ],
      newPostText: 'it-kamasutra.com',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Yaho' },
      ],
    }
  },

  // state қайтаратын функция
  getState() {
    return this._state;
  },

  // State өзгерген кезде UI салатын функция
  _callSubscriber() {
    console.log('State changed')
  },

  // Жаңа пост қосатын функция
  addPost() {

    // Жаңадан пост объект жасау
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    };
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  // Textarea да жазылған әрбір өзгерістерді салып отыру
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  // index.js тағы рендер функцияны шақыру
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      };
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });



export default store;