import {IKeyBoardState, KeyBoardActions, KeyBoardActionTypes} from "../../types/KeyBoard";

const initialState: IKeyBoardState = {
  password: '4213',
  userInput: '',
  open: false
}

export const KeyBoardReducer = (state = initialState, action: KeyBoardActions): IKeyBoardState => {
  switch (action.type) {
    case KeyBoardActionTypes.KEYBOARD_REMOVE:
      console.log('remove')
      return {...state, open: false, userInput: state.userInput.slice(0, -1)}
    case KeyBoardActionTypes.KEYBOARD_ADD:
      console.log('add')
      return {...state, open: false, userInput: state.userInput + action.payload}
    case KeyBoardActionTypes.KEYBOARD_OPEN:
      console.log('open')
      return {...state, open: true}
    case KeyBoardActionTypes.KEYBOARD_CHANGE:
      console.log('changed')
      return {...state, userInput: action.payload}
    default:
      return state
  }
}