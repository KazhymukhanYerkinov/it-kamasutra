let rerenderEntireTree = () => {
    console.log('State is changed');
}

let state = {
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
}

// Жаңа пост қосатын функция
export const addPost = () => {

    // Жаңадан пост объект жасау
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

// Textarea да жазылған әрбір өзгерістерді салып отыру
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

// index.js тағы рендер функцияны шақыру
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;