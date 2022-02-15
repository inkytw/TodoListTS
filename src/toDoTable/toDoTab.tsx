import {FC} from 'react';
import styled from 'styled-components';

const TabList = styled.ul`
    display: flex;
    text-align: center;
    padding-top: 1rem;
`;

const Tab = styled.li<{
    readonly active: boolean
}>`
    font-size: 1.125rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 4px solid #f0f0f0;
    color: ${(props) => (props.active ? "#2b2b2b" : "#AAAAAA")};
    border-color: ${(props) => (props.active ? "#2b2b2b" : "#f0f0f0")};
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
    :hover {
        cursor: pointer;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

interface TabsProps {
    changeTab: Function;
    isActive: Function;
}

const Tabs: FC<TabsProps> = ({changeTab, isActive}) => {
    
    return (
        <TabList>
            <Tab
                // tab='all'
                active={isActive('all')}
                onClick={() => {
                    changeTab("all");
                }}
            >
                全部
            </Tab>
            <Tab
                // tab="doing"
                active={isActive("doing")}
                onClick={() => {
                    changeTab("doing");
                }}
            >
                待完成
            </Tab>
            <Tab
                // tab="done"
                active={isActive("done")}
                onClick={() => {
                    changeTab("done");
                }}
            >
                已完成
            </Tab>
        </TabList> 
    )
}

export default Tabs;