import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';

function TodoInput() {
    const [inputText, setInputText] = useState('');
    const { addList } = useContext(TodoContext);

    return (
        <div className="input-container">
            <input
                type="text"
                className="input-box-todo"
                placeholder="Enter your todo"
                value={inputText}
                onChange={e => {
                    setInputText(e.target.value);
                }}
                
            />
            <button className="add-btn"
                onClick={() => {
                    addList(inputText);
                    setInputText("");
                }}>+</button>
        </div>
    );
}

export default TodoInput;
