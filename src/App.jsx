import React, { Component } from 'react';
import { Counted } from '../Statistic/Statistic';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

// export const App = () => {
//   return (
//     <>
//       <Counted />
//     </>
//   );
// };

class App extends Component {
  state = {
    todos: initialTodos,
  };

  delereTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoiIb),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? (acc = 1) : acc),
      0
    );
    return (
      <>
        <h1>Состояние компонента</h1>

        <div>
          <p>Общее количество: {todos.lenght}</p>
          <p>Количество выполненных:</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export const App = () => {
  return (
    <>
      <Counted />
    </>
  );
};
