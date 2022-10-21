import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState({do: ""});

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue,
        };
        setTodo(newTodo);
    }

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo));
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index));
    }

    const toggleTodoDone = (index) => {
        dispatch(todoDoneToggle(index));
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button className="btn btn-primary w-25 float-end" onClick={createTodoClickHandler}>Create</button>
                    <input className="form-control w-75" onChange={todoChangeHandler} value={todo.do}/>
                </li>
                {todos.map((todo, ndx) =>
                    <li className="list-group-item" key={todo._id}>
                        <button className="btn btn-danger float-end ms-2" onClick={() => deleteTodoClickHandler(ndx)}>Delete</button>
                        <input className="me-2" type="checkbox" checked={todo.done} onChange={() => toggleTodoDone(todo._id)}/>
                        {todo.do}
                    </li>
                )}
            </ul>
        </>
    )
}

export default Todos;