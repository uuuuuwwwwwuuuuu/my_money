import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Widget = styled.div`
    height: 100%;
    flex: 0 1 450px;
    min-width: 250px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.bgSecond};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    span {
        font-size: 2rem;
        font-weight: 500;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    &:last-child {
        margin-left: 20px;
    }
`;

interface Props {
    textColor: 'error' | 'accent';
    children: string
}

const PaymentWidget: FC<Props> = ({ textColor, children }) => {
    const theme = useTheme();
    const words = children.split(' ');

    return (
        <Widget>
            <div>
                <span>{words[0]}</span>
                <span style={{color: textColor === 'accent' ? theme.accent : theme.error}}>{words[1].toUpperCase()}</span>
            </div>
        </Widget>
    );
};

export default PaymentWidget;
