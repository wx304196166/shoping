const intlState = {
  inputValue: 0
}

const redecerFn = (state = intlState, action) => {
  switch (action.type) {
    case 'ADD':
      const {
        num
      } = action;
      return {
        ...state,
        inputValue: num + 1
      }
    default:
      console.log(state);
      return state
  }
}

export default redecerFn;