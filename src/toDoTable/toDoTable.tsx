import { FC, useState } from 'react';
import styled from 'styled-components';
import Tabs from './toDoTab';
import TodoItems from './toDoItems';
import ToDoFooter from './toDoFooter';

const Container = styled.div`
    margin: 2rem auto;
    width: 90%;
    @media (min-width: 768px) {
        max-width: 946px;
    } ;
`;

const TodoInput = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.125rem;
    box-sizing: border-box;
    box-shadow: 0 3px 6px #00000029;
    margin-bottom: 1rem;
    ::placeholder {
        color: #aaaaaa;
    }
    &:focus {
        outline: none;
        border-color: none;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
        padding: 1rem;
    }
`;

const TodoCard = styled.div<{ isEmpty: boolean }>`
    display: ${(props) => (props.isEmpty ? 'none' : 'flex')};
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 3px 6px #00000029;
    color: #aaaaaa;
    font-size: 18px;
    margin-bottom: 2rem;
    @media (min-width: 768px) {
        min-height: 500px;
    }
`;

export const TodosList = styled.ul`
    flex-grow: 1;
`;

const ToDoTable: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all'); // 目前頁籤
    const [value, setValue] = useState<string>(''); // 欲新增事項

    interface TodosType {
        id: string;
        content: string;
        isChecked: boolean;
    }
    
    const [todos, setTodos] = useState<Array<TodosType>>([    // 待辦事項陣列
        {
            id: Math.floor(Math.random() * 10000).toString(),
            content: '打掃房間',
            isChecked: false,
        },
        {
            id: Math.floor(Math.random() * 10000).toString(),
            content: '買雞蛋',
            isChecked: true,
        },
        {
            id: Math.floor(Math.random() * 10000).toString(),
            content: '遛狗',
            isChecked: false,
        },
    ]);

    // 新增待辦事項
    const addTodo = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        if (e.key === 'Enter') {
            // 把要新增的事項放入待辦清單陣列中
            console.log(value);
            if (value.trim() !== '') {
                const newTodo = {
                    id: Math.floor(Math.random() * 10000).toString(),
                    content: value,
                    isChecked: false,
                };
                setTodos([newTodo, ...todos]);

                // 新增完 todo 後清空 value
                setValue('');
            }
        }
    };

    // 從 input 的 value取得要新增的事項
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    // 修改清單狀態
    const handleTabChanged = (activeTab: string): void => {
        setActiveTab(activeTab);
    };

    // Delete ToDo Item
    const handleDelete = (id: string): void => {
        const todosToDelete = JSON.parse(JSON.stringify(todos));
        setTodos(todosToDelete?.filter((todo: TodosType) => todo.id !== id ));
    };

    // Check box onchanged
    const handleChecked = (id: string): void => {
        const todosToModify = todos.map((todo) => {
            if( todo.id === id ) {
                todo.isChecked = !todo.isChecked;
            }
            return todo;
        });

        setTodos(todosToModify);
    };

    // 計算目前待完成項目數量
    const computeListNum = (): number => {
        const tempTodos = JSON.parse(JSON.stringify(todos));
        return tempTodos.filter((todo: TodosType) => todo.isChecked === false)?.length;
    };

    // 刪除待辦事項
    const handleDeleteAllDoneTodo = (): void => {
        const tempTodos = JSON.parse(JSON.stringify(todos));
        setTodos(tempTodos.filter((todo: TodosType) => todo.isChecked === false));
    };

    // 判斷當前 tab
    const isActive = (tab: string): boolean => {
        return tab === activeTab;
    };

    return (
        <Container>
            <TodoInput
                type='text'
                placeholder='請輸入待辦事項'
                value={value}
                onChange={handleInputChange}
                onKeyDown={addTodo}
            />
            <TodoCard isEmpty={todos.length === 0}>
                <Tabs
                    changeTab={handleTabChanged}
                    isActive={isActive}
                />
                <TodosList>
                    {
                        todos.map((todo) => (
                            <TodoItems 
                                key={todo.id}
                                id={todo.id}
                                todo={todo}
                                handleDelete={handleDelete}
                                handleChecked={handleChecked}
                            />
                        ))
                    }
                </TodosList>
                <ToDoFooter
                    todosNum={computeListNum()}
                    handleDeleteAllDoneTodo={handleDeleteAllDoneTodo}
                />
            </TodoCard>
        </Container>
    );
}

export default ToDoTable;
