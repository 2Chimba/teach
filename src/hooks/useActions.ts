import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { actions } from "../store/tasksSlice";

const rootActions = {
  ...actions
}

export const useActions = () => {
  const dispatch = useDispatch();
  
  return useMemo (() => 
    bindActionCreators(rootActions, dispatch),[dispatch]);
}