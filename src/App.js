import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hi</h1>
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
