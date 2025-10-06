import { CSSProperties, FC } from "react";
import './History.scss';
import styled, { useTheme } from "styled-components";

const Info = styled.div`
    margin-top: 10px;
    background-color: ${({theme}) => theme.bgMain};
    flex: 1;
    border-radius: 10px;
    padding: 10px;

    li {
        display: flex;
        justify-content: space-between;
    }
`;

interface ListProps {
    title: string,
    paymentType: 'income' | 'expenditure',
    count: number
}

const HistoryListElement: FC<ListProps> = ({title, paymentType, count}) => {
    const theme = useTheme();
    const styleType: CSSProperties = {
        color: paymentType === 'income' ? theme.success : theme.error
    }

    return (
        <li style={{marginBottom: 5}}>
            <span>{title}</span>
            <span style={styleType}>{`${paymentType === 'income' ? '+' : '-'}${count} $`}</span>
        </li>
    )
}

const History: FC = () => {
    return (
        <div className="history_widget">
            <span>История операций</span>
            <Info>
                <ul>
                    <HistoryListElement title="Покупка продуктов" paymentType='expenditure' count={48}/>
                    <HistoryListElement title="Зачисление зарплаты" paymentType="income" count={1032}/>
                    <HistoryListElement title="Покупка телевизора" paymentType="expenditure" count={990}/>
                </ul>
            </Info>
            <button className="history_more_info">
                <span>Смотреть подробнее</span>
            </button>
        </div>
    )
}

export default History;