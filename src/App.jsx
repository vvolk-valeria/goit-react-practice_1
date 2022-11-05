import React, { Component } from 'react';
//import { GlobalStyle } from './GlobalStyle';
//import { ProductReviewForm } from './components/LoginForm/ProductReviewForm';
// import TodoList from './components/TodoList';
// import initialTodos from './todos.json';
// import TodoEditor from './components/TodoList/TodoEditor';
// import Filter from './components/TodoList/Filter';
import ColorPicker from './components/ColorPicker';
import Statistic from './components/Statistic/Statistic';
//import Dropdown from './components/Dropdown';
import { ColorPickerOptions } from './components/ColorPicker/ColorPickerOptions';
//import { LoginForm } from './components/LoginForm/LoginForm';
//import Form from './components/Form';
const shortid = require('shortid');

//* модуль 2 - TodoList
// export class App extends Component {
//   state = {
//     todos: initialTodos,
//     filter: '',
//   };

//   addTodo = text => {
//     const todo = {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     };

//     this.setState(prevState => ({
//       todos: [todo, ...prevState.todos],
//     }));
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   toggleCompleted = todoId => {
//     //     this.setState(({todos}) => ({
//     //    todos: todos.map(todo => {
//     //      todo.id === todoId ? {
//     //        ...todo,
//     //         completed: !todo.completed,
//     //      } : todo,
//     //    ),
//     // }));

//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo => {
//         if (todo.id === todoId) {
//           console.log('нашли что нужно');
//           return {
//             ...todo,
//             completed: !todo.completed,
//           };
//         }
//         return todo;
//       }),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   calculateCompletedTodos = () => {
//     const { todos } = this.state;

//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   render() {
//     const { todos, filter } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();

//     // const completedTodos = todos.reduce(
//     //   (acc, todo) => (todo.completed ? acc + 1 : acc),
//     //   0
//     // );
//     return (
//       <>
//         <h1>Состояние компонента</h1>

//         <div>
//           <p>Всего заметок: {totalTodoCount}</p>
//           <p>Выполнено: {completedTodoCount}</p>
//         </div>

//         <TodoEditor onSubmit={this.addTodo} />

//         <Filter value={filter} onChange={this.changeFilter} />

//         <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />

//         {/* <Form propOnSubmit={this.formSubmitHandler} /> */}
//       </>
//     );
//   }
// }

//* модуль 2 - остальные
export const App = () => {
  return (
    <>
      <Statistic />
      {/* <Dropdown /> */}
      <ColorPicker options={ColorPickerOptions} />

      {/* <Form propOnSubmit={this.formSubmitHandler} /> //? НЕ РАБОТАЕТ */}
    </>
  );
};

//* модуль 2 - библиотеки

// export const App = () => {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// };

//* ФОРМА

// export class App extends Component {
//   state = {
//     filter: '',
//   };
//   render() {
//     return (
//       <>
//         <GlobalStyle />
//         <ProductReviewForm />
//         <Filtere
//           onChange={e => this.setState({ filter: e.target.value })}
//           value={this.state.filter}
//         />
//       </>
//     );
//   }
// }

// function Filtere({ onChange, value }) {
//   return <input type="text" onChange={onChange} value={value} />;
// }
