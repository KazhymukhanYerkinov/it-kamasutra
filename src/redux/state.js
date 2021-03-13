import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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
      newMessageBody: "",
    }
  },

  // State өзгерген кезде UI салатын функция
  _callSubscriber() {
    console.log('State changed')
  },

  // state қайтаратын функция
  getState() {
    return this._state;
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}




export default store;