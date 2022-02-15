import { FC, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import ToDoTable from './toDoTable/toDoTable';
import WeatherCard from './weatherCard/weatherCard';

const BackGround = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
    
    background-image: linear-gradient(
        170deg,
        #ffc753 2%,
        #ffc753 46%,
        #ffffff 46%,
        #ffffff 100%
    );
    letter-spacing: 0.07em;
    background-repeat: no-repeat;
`;

const ButtonGroup = styled.div`
    width: 90%;
    background: #fff;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 2.5rem;
    @media (min-width: 768px) {
        max-width: 946px;
    };
`;

const Button = styled.button<{ active: boolean }>`
    width: 50%;
    background: ${(props) => (props.active ? '#2b2b2b' : '#ffffff')};
    color: ${(props) => (props.active ? '#fec753' : '#464646')};
    font-size: 1.125rem;
    padding: 1rem;
    border: 0;
    border-radius: 2.5rem;
    @media (min-width: 768px) {
        padding: 0.5rem;
        font-size: 1.5rem;
    }
`;

const App:FC = () => {
    // 紀錄當前頁面狀態
    const [activePage, setActivePage] = useState<string>('todo');

    // 更改當前頁面
    const switchPage = (page: string) => {
        setActivePage(page);
    };

    // 判斷目前在哪個 page
    const isActive = (page: string) => page === activePage;

    return (
        <BackGround>
            <BrowserRouter>
                <ButtonGroup>
                    <Link to='/'>
                        <Button
                            active={isActive('todo')}
                            onClick={() => switchPage('todo')}
                        >
                        待辦清單
                        </Button>
                    </Link>
                    <Link to='/weatherCard'>
                        <Button
                            active={isActive('weather')}
                            onClick={() => switchPage('weather')}
                        >
                        即時天氣預報
                        </Button>
                    </Link>
                </ButtonGroup>
                <Routes>
                    <Route path='/' element={<ToDoTable/>} />
                    <Route path='/weatherCard' element={<WeatherCard/>} />
                </Routes>
            </BrowserRouter>
        </BackGround>
    );
};

export default App;
