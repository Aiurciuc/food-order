export function cartReducer(state, action) {
  switch (action.type) {
    case "init": {
      return {
        ...action.payload,
      };
    }
    case "add": {
      return {
        ...state,
        [action.meal.id]: {
          ...action.meal,
          quantity: 1,
        },
      };
    }
    case "plus": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: state[action.id].quantity + 1,
        },
      };
    }
    case "minus": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          quantity: state[action.id].quantity - 1,
        },
      };
    }
    case "remove": {
      delete state[action.id];
      return {
        ...state,
      };
    }
    case "clear": {
      return {};
    }
  }
}
