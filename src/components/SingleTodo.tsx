import React, { memo } from 'react';
import { Todo } from '../model';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import "./styles.css";

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo: React.FC<Props> = memo(({
    todo,
    todos,
    setTodos,
}) => {
    return (
        <form className='todos__single'>
            <span className='todos__single--text'>
                {todo.todo}
            </span>
        
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon">
                    <AiFillDelete />
                </span>
                <span className="icon">
                    <MdDone />
                </span>
            </div>
        </form>
    )
});

export default SingleTodo;