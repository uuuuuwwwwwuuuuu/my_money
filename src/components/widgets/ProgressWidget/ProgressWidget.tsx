import React, { FC } from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import './ProgressWidget.scss';

const WidgetBody = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.bgSecond};
    border-radius: 15px;
    padding: 30px 40px;
    flex: 0 1 850px;
    display: flex;
    justify-content: space-between;
`;

const PercentageValue = styled.span<{ circularProgressSize: number }>`
    font-size: 3.2rem;
    font-weight: 700;
    font-family: 'Ubuntu';
    position: absolute;
    top: ${({ circularProgressSize }) => `${(circularProgressSize - 33) / 2 + 'px'}`};
    left: ${({ circularProgressSize }) => `${(circularProgressSize - 66) / 2 + 'px'}`};
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    height: 65px;
    padding: 0 40px;
`;

const Info = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 2rem;
        font-weight: 500;
    }
`;

const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 210,
    strokeWidth = 20,
    progressColor = '#37B4C8'
}) => {
    const radius = (size - strokeWidth) / 2; // Радиус круга
    const circumference = 2 * Math.PI * radius; // Длина окружности
    const offset = circumference - (value / 100) * circumference; // Смещение прогресса

    const theme = useTheme();

    if (value >= 85) {
        progressColor = theme.error;
    }

    return (
        <div className="progress_bar">
            <svg width={size + 10} height={size + 10}>
                {/* Фильтр для свечения */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Прогресс */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    filter="url(#glow)" // Применяем свечение
                    transform={`rotate(270 ${size / 2} ${size / 2})`}
                />
            </svg>
        </div>
    );
};

const ProgressWidget: FC = () => {
    const theme = useTheme();
    const circularProgressSize = 210;

    return (
        <WidgetBody>
            <div className='progress_widget_left'>
                <div className="progress_bar_wrapper">
                    <CircularProgress
                        progressColor={theme.accent}
                        value={50}
                        size={circularProgressSize}
                    />
                    <PercentageValue circularProgressSize={circularProgressSize}>38%</PercentageValue>
                </div>
                <InfoWrapper>
                    <Info>
                        <span>Потрачено</span>
                        <span style={{color: theme.error}}>2436 $</span>
                    </Info>
                    <Info>
                        <span>Остаток</span>
                        <span style={{color: theme.accent}}>3640 $</span>
                    </Info>
                </InfoWrapper>
            </div>
            <ul className='progress_widget_right'>
                <li>
                    <span>Развлечения</span>
                    <span>304 $</span>
                </li>
                <li>
                    <span>Спорт</span>
                    <span>124 $</span>
                </li>
                <li>
                    <span>Еда</span>
                    <span>259 $</span>
                </li>
                <li>
                    <span>Машина</span>
                    <span>201 $</span>
                </li>
            </ul>
        </WidgetBody>
    );
};

interface CircularProgressProps {
    value: number; // Прогресс в процентах
    size?: number; // Размер круга
    strokeWidth?: number; // Толщина линии
    progressColor?: string; // Цвет прогресса
}

export default ProgressWidget;
