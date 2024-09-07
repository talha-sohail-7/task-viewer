import React, { useContext } from 'react';
import { TodoContext } from '../App';

function Todolist(props) {
    const { deleteListItem } = useContext(TodoContext);

    return (
        <li className="list-item">
            {props.item}
            <span className='icons'>
                <i className="fa-solid fa-trash-can icon-delete"
                    onClick={() => deleteListItem(props.index)}></i>
            </span>
        </li>
    );
}

export default Todolist;
