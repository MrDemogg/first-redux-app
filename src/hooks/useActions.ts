import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {bindActionCreators} from 'redux'
import ActionCreators from "../store/action-creators";

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}