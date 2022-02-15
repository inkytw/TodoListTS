import { FC } from 'react';
import styled from 'styled-components';

export const CardFooterContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #2b2b2b;
    padding: 1rem 0;

    p {
        margin: 1rem 0;
    }

    button {
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
        background: #fff;
        border: 1px solid #fec753;
        border-radius: 13px;
        cursor: pointer;
        margin: 1rem 0;

        &:hover {
        background: #fec753;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        font-size: 1.5rem;
        box-sizing: border-box;
        padding: 1.5rem 3rem;

        button {
        font-size: 1.5rem;
        padding: 0.5rem 1.5rem;
        }

    }
`;

interface FooterPropsType {
    todosNum: number;
    handleDeleteAllDoneTodo: React.MouseEventHandler<HTMLButtonElement>;
}

const ToDoFooter: FC <FooterPropsType> = ({ todosNum, handleDeleteAllDoneTodo }) => {
    return (
        <CardFooterContain>
            <p>
                <span>{todosNum}</span> 個待完成項目
            </p>
            <button type='button' onClick={handleDeleteAllDoneTodo}>
                清除已完成項目
            </button>
        </CardFooterContain>
    );
};

export default ToDoFooter;
