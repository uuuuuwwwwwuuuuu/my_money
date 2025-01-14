import React, { FC } from "react";
import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 3.2rem;
    
    span {
        font-family: 'Shantell Sans';
        font-weight: 900;
        margin-bottom: 20px;
    }
`;

interface IPrors {
    title: string
}

const Headers: FC<IPrors> = ({title}) => {
    return (
        <Header>
            <span>{title}</span>
        </Header>
    );
}

export default Headers;
