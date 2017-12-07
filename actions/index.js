export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';

export function addDeck(title) {
  return {
    type: ADD_DECK,
    payload: { title },
  };
}
export function removeDeck(deck) {
  return {
    type: REMOVE_DECK,
    payload: { deck },
  };
}
export function addCard(title, question, answer) {
  console.log('here')
  return {
    type: ADD_CARD,
    payload: { title, question, answer },
  };
}
