export interface IKeyBoardState {
  password: string;
  userInput: string;
  open: boolean
}

export enum KeyBoardActionTypes {
  KEYBOARD_ADD = 'KEYBOARD_ADD',
  KEYBOARD_REMOVE = 'KEYBOARD_REMOVE',
  KEYBOARD_OPEN = 'KEYBOARD_OPEN',
  KEYBOARD_CHANGE = 'KEYBOARD_CHANGE'
}

interface KeyBoardAdd {
  type: KeyBoardActionTypes.KEYBOARD_ADD,
  payload: string
}

interface KeyBoardRemove {
  type: KeyBoardActionTypes.KEYBOARD_REMOVE
}

interface KeyBoardOpen {
  type: KeyBoardActionTypes.KEYBOARD_OPEN
}

interface KeyBoardChange {
  type: KeyBoardActionTypes.KEYBOARD_CHANGE,
  payload: string
}

export type KeyBoardActions = KeyBoardAdd | KeyBoardRemove | KeyBoardOpen | KeyBoardChange