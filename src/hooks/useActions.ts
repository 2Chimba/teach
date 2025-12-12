<<<<<<< HEAD
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { actions } from "../store/tasks/tasksSlice";
import { useAppDispatch } from "../store/store";
=======
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { useMemo } from "react";
import { actions } from "../store/tasksSlice";
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0

const rootActions = {
  ...actions
}

export const useActions = () => {
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  
  // рендиринг и как он работает, мемоизация
  return useMemo(() => 
=======
  const dispatch = useDispatch();
  
  return useMemo (() => 
>>>>>>> 72e0c6d7095d3c0d9d4c7405d32e29a6253e44f0
    bindActionCreators(rootActions, dispatch),[dispatch]);
}