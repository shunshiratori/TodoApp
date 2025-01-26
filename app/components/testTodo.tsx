"use client";

import { useState } from "react";

export const TestTodo = () => {
  const [task, setTask] = useState("");
  const [InCompleateTodos, setInCompleateTodo] = useState<string[]>([]);
  const [CompleateTodos, setCompleateTodo] = useState<string[]>([]);

  const taskInput = (e) => {
    setTask(e.target.value);
  };

  const taskAdd = () => {
    const newTodos = [...InCompleateTodos, task];
    setInCompleateTodo(newTodos);
    setTask("");
  };

  const clickCompleate = (index, todo) => {
    const newInCompleateTodos = [...InCompleateTodos];
    const newCompleateTodos = [...CompleateTodos];

    newInCompleateTodos.splice(index, 1);
    setInCompleateTodo(newInCompleateTodos);

    newCompleateTodos.push(todo);
    setCompleateTodo(newCompleateTodos);
  };

  const clickDelete = (index) => {
    const newInCompleateTodos = [...InCompleateTodos];
    newInCompleateTodos.splice(index, 1);
    setInCompleateTodo(newInCompleateTodos);
  };

  const clickBack = (index, todo) => {
    const newCompleateTodos = [...CompleateTodos];
    const newInCompleateTodos = [...InCompleateTodos];

    newCompleateTodos.splice(index, 1);
    setCompleateTodo(newCompleateTodos);

    newInCompleateTodos.push(todo);
    setInCompleateTodo(newInCompleateTodos);
  };

  return (
    <div className="TodoList">
      <h2>Todo App</h2>
      <div className="TodoList_Input">
        <input
          type="text"
          value={task}
          onChange={taskInput}
          placeholder="Todoを入力"
        />
        <button onClick={taskAdd}>追加</button>
      </div>

      <div className="InCompleateArea">
        <p className="title">未完了のTodo</p>

        <ul>
          {InCompleateTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="Todorow">
                  <p>{todo}</p>
                  <button onClick={() => clickCompleate(index, todo)}>
                    完了
                  </button>
                  <button onClick={() => clickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="CompleateArea">
        <p className="title">完了のTodo</p>

        <ul>
          {CompleateTodos.map((todo, index) => {
            return (
              <li key={index}>
                <div className="Todorow">
                  <p>{todo}</p>
                  <button onClick={() => clickBack(index, todo)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
