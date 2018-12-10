// initial state
const initialState = {
  name: '',
  email: '',
  birthday: '',
  hobbies: ''
};

//action types or constants
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const UPDATE_HOBBIES = 'UPDATE_HOBBIES';
const UPDATE_INPUT = 'UPDATE_INPUT';

//action creator
export const updateName = name => {
  return {
    type: UPDATE_NAME,
    payload: name
  };
};
export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
};
export const updateBirthday = birthday => {
  return {
    type: UPDATE_BIRTHDAY,
    payload: birthday
  };
};
export const updateHobbies = hobbies => {
  return {
    type: UPDATE_HOBBIES,
    payload: hobbies
  };
};

// export const updateInput = input => {
//   type: UPDATE_INPUT;
//   payload: input
// }

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    case UPDATE_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload
      };
    case UPDATE_HOBBIES:
      return {
        ...state,
        hobbies: action.payload
      };
      case UPDATE_INPUT:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    default:
      return state;
  }
}
