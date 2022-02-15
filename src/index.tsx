import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import ToDoTable from './toDoTable/toDoTable';
import App from './APP';

ReactDOM.render(
    <React.StrictMode>
        <App>
            <ToDoTable/>
        </App>
    </React.StrictMode>,
    document.getElementById('root')
);