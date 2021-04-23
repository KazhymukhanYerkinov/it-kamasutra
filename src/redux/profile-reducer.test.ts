import profileReducer, { actions } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: 'It\'s my first post', likeCount: 8 },
  ],
  profile: null,
  status: '',
  newPostText: ''
}

it('length of posts should be incremented', () => {

  // 1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {

  // 1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe("it-kamasutra.com");
  
})

it('after deleting length of messages should be decrement', () => {

  // 1. test data
  let action = actions.deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
  
})