import { FC } from 'react';
import { ReactComponent as CheckedIcon } from '../images/icon_checked.svg';
import { ReactComponent as DeleteIcon } from '../images/icon_delete.svg';
import styled from 'styled-components';

const TodoItem = styled.li`
    position: relative;
    /* padding-top: 0 1.125rem; */

    .checkbox {
        position: relative;
        display: block;
        padding-left: 2.75rem;
        cursor: pointer;

        .checked-icon {
            position: absolute;
            left: 0rem;
            top: 25%;
            opacity: 0;
            width: 1.5rem;
            height: 1.5rem;
        }

        .checked-icon path {
            stroke: #fec753;
            stroke-width: 4px;
        }

        input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            cursor: pointer;
            display: block;
            width: 100%;
            height: 100%;
            margin: 0;
        }

        span {
            display: block;
            color: #2b2b2b;
            font-size: 1.125rem;
            padding: 1.125rem 1rem;
            border-bottom: 1px solid #eee;
            line-height: 1.5;
        }

        span::before {
            content: "";
            position: absolute;
            left: 0rem;
            top: 50%;
            transform: translateY(-50%) scale(1);
            height: 1.5rem;
            width: 1.5rem;
            border: 1px solid #333;
            border-radius: 8px;
            pointer-events: none;
        }

        input:checked {
            ~ span {
                color: #aaaaaa;
                text-decoration: line-through;
            }
            ~ span::before {
                border-color: transparent;
                transform: translateY(-50%) scale(0);
            }
            ~ .checked-icon {
                opacity: 1;
            }
        }
    }

    button.delete {
        background: 0;
        border: 0;
        position: absolute;
        opacity: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 1rem;

        svg {
            width: 1rem;
            height: 1rem;
        }
    }

    :hover button.delete {
        opacity: 1;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        padding: 0 3rem;
        margin: 1rem 0;

        .checkbox {
            span {
                font-size: 1.5rem;
            }

            span::before {
                height: 2rem;
                width: 2rem;
            }

            .checked-icon {
                width: 2rem;
                height: 2rem;
            }
        }

        button.delete {
            margin-right: 3.75rem;
            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
`;

interface TodoItemProps {
    id: string;
    todo: TodoItemDetailType;
    handleDelete: Function;
    handleChecked: Function;
}

interface TodoItemDetailType {
    id: string;
    content: string;
    isChecked: boolean;
}

const TodoItems: FC<TodoItemProps> = ({ id, todo, handleDelete, handleChecked }) => (
    <TodoItem>
        <label className='checkbox' htmlFor={id}>
            <input
                type='checkbox'
                id={id}
                checked={todo.isChecked}
                onChange={() => {
                    handleChecked(todo.id);
                }}
            />
            <CheckedIcon className='checked-icon' />
            <span>{todo.content}</span>
        </label>
        <button
            type='button'
            className='delete'
            onClick={() => {
                handleDelete(todo.id);
            }}
        >
            <DeleteIcon />
        </button>
    </TodoItem>
);

export default TodoItems;
