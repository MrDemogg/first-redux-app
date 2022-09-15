import {KeyBoardReducer} from "./KeyBoardReducer";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  keyboard: KeyBoardReducer
})

export type RootState = ReturnType<typeof rootReducer>