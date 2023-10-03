import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoItem } from './ToDoItem'

function App() {
    return (
        <div>
            <TodoItem text="take out the trash"/>
            <TodoItem text="buy vegetables"/>
            <TodoItem text="pay the bills"/>
        </div>
    );
};

export default App
