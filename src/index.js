import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import App from './App';

ReactDOM.render(
    <TodoList />, 
    document.getElementById('root1')
);

ReactDOM.render(
    <App />,
    document.getElementById('root2')
)