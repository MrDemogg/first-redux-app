import {KeyBoardActions, KeyBoardActionTypes} from "../../types/KeyBoard";

export const addToKeyBoard = (num: string): KeyBoardActions => {
  return {type: KeyBoardActionTypes.KEYBOARD_ADD, payload: num}
}

export const removeFromKeyBoard = (): KeyBoardActions => {
  return {type: KeyBoardActionTypes.KEYBOARD_REMOVE}
}

export const openKeyBoard = (): KeyBoardActions => {
  return {type: KeyBoardActionTypes.KEYBOARD_OPEN}
}

export const changeKeyBoard = (value: string): KeyBoardActions => {
  return {type: KeyBoardActionTypes.KEYBOARD_CHANGE, payload: value}
}