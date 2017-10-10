//state arg is not "application" state,
//only the state that this reducer is responsible for
export default function(state = null, action) {
  //state = null is es6 syntax sugar for: if no state is passed it's null
  //as opposed to undefined (which throws errors)
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
  }
  
  return state;
}