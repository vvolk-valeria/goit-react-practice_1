import React from 'react';
import classNames from 'classnames';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          checked={completed}
          className="TodoList__checkbox"
          onChange={() => onToggleCompleted(id)}
        />

        <p className="TodoList__text">{text}</p>
        <button className="TodoList__btn" onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
