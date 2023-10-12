import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Piter', number: '380938034433' },
  { id: 1, name: 'Anna', number: '380938034422' },
  { id: 2, name: 'Master React', number: '380938034419' },
  { id: 3, name: 'Queen', number: '380938034418' },
  { id: 4, name: 'Beezz', number: '380938034417' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    remContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, remContact } = contactsSlice.actions;
