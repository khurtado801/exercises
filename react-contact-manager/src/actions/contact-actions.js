import { contacts } from '../contacts-data';

export const fetchContacts = () => {
  return dispatch => {
      dispatch({
          type: 'FETCH_CONTACTS',
          payload: contacts
      });
  };
};

