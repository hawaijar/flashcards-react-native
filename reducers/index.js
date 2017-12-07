import { combineReducers } from 'redux';
import find from 'lodash/find';
import { ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions';
import data from './data';

const decks = (state = data, action) => {
  switch (action.type) {
    case ADD_DECK: {
      const { title } = action.payload;
      return {
        ...state,
        [title]: {
          title: `${title}`,
          questions: []
        }
      };
    }
    case REMOVE_DECK: {
      const { deck } = action.payload;
      const updatedDecks = { ...state };
      delete updatedDecks[`{deck}`];
      return updatedDecks;
    }
    case ADD_CARD: {
      const { title, question, answer } = action.payload;
      let questions = state[`${title}`].questions;
      questions = [
        ...questions,
        {
          question,
          answer
        }
      ];
      state[`${title}`].questions = questions;
      state[`${title}`].count = questions.length;
      console.log('state:', state)
      return state;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  decks
});
export default rootReducer;
