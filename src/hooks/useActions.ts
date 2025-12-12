import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { actions } from "../store/tasks/tasksSlice";
import { useAppDispatch } from "../store/store";

const rootActions = {
  ...actions
}

export const useActions = () => {
  const dispatch = useAppDispatch();
  
  // рендиринг и как он работает, мемоизация
  return useMemo(() => 
    bindActionCreators(rootActions, dispatch),[dispatch]);
}