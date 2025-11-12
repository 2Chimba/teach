import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actions } from "../store/tasksSlice";

const rootActions = {
  ...actions
}

export const useActions = () => {
  const dispatch = useDispatch();
  
  return bindActionCreators(rootActions, dispatch);
}