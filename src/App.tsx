
import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });;  
  const [filter, setFilter] = useState("all");  
  const [todo, setTodo] = useState(0);  
  const [text, setText] = useState('');  
  
  const visibleTasks = tasks.filter(task => {
    if (filter === "done") return task.done;
    if (filter === "notDone") return !task.done;
    return true; 
  });

  const toggleDone = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const addItem = () => {
    const newItem = {
      id: todo,
      text: `${text}`,
      done: false
    };
    if(text.trim() != ""){
      setTasks([...tasks, newItem]);
      setTodo(todo + 1); 
      setText ('');
    }
  };

  const deleteItem = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteDone = (doneStatus: boolean) => {
    setTasks(tasks.filter(task => task.done !== doneStatus));
  };

  const enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter'){
      addItem();
    }
  };

  const completedCount = tasks.filter(task => task.done).length;

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="input__area">
        <input type = 'text'
             value = {text} 
             onKeyDown={enter} 
             onChange={(e) => setText(e.target.value)} 
             className="input__text"
             placeholder="Введите задачу"
             autoFocus>    
        </input>
        <button className = "button__add" onClick={addItem}>Создать задачу</button>
      </div>
      
      <div className="filter__buttons">
        <ul className = 'filter'>
          <li><button className="filter__button all" onClick={() => setFilter("all")}>Все задачи</button></li>
          <li><button className="filter__button" onClick={() => setFilter("done")}>Завершённые</button></li>
          <li><button className="filter__button notDone" onClick={() => setFilter("notDone")}>В процессе</button></li>
        </ul>
        <ul className="delete__buttons">
          <li><button className="filter__button all" onClick={()=>deleteDone(true)}>Удалить готовые</button></li>
          <li><button className="filter__button notDone" onClick={() => deleteDone(false)}>Удалить в процессе</button></li>
        </ul>
      </div>

      <div>
        <p>Количество задач: {tasks.length}</p>
        <p>Выполненных задач: {completedCount}</p>
      </div>
      
      {visibleTasks.length === 0 && <p><h2>Список задач пуст</h2></p>}

      {visibleTasks.map((item, index) => (
        <div key={item.id} className={`cart${item.done ? " done" : ""}`}>
          <div className="cart__number">{index + 1})</div>
          <div className="cart__checkbox">
            <input type = "checkbox" 
                   name="done" 
                   value="done" 
                   id={`done-${item.id}`}
                   checked={item.done}
                   onChange={() => toggleDone(item.id)}/>
          </div>
          <div className="cart__text">
            {item.text}
          </div>
          <button className="button__delete" onClick={() => deleteItem(item.id)}>X</button>
        </div>
        ))}
    </>
  );
}

export default App;
