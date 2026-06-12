const ADD_CONTACT = 'ADD_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';
const SET_FILTER = 'SET_FILTER';

const contactsStore = {
  contacts: [],
  filter: '',
};

export const contactsReducer = (state = contactsStore, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const deleteContact = (contact) => ({
  type: REMOVE_CONTACT,
  payload: contact,
});

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value,
});
