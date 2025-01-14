import React, { FC } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import './BaseWidget.scss';

const WidgetBody = styled.div`
    height: 350px;
    background-color: ${({ theme }) => theme.bgSecond};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const BaseWidget: FC = () => {
    const theme = useTheme();

    return (
        <WidgetBody>
            <CircularProgress
                className="progress_bar"
                progressColor={theme.accent}
                dimAccent={theme.dimAccent}
                value={90}
            />
        </WidgetBody>
    );
};

interface CircularProgressProps {
    value: number; // Прогресс в процентах
    size?: number; // Размер круга
    strokeWidth?: number; // Толщина линии
    dimAccent?: string; // Цвет фона круга
    progressColor?: string; // Цвет прогресса
    className: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    value,
    size = 220,
    strokeWidth = 20,
    progressColor = "#37B4C8",
    dimAccent,
    className
}) => {
    const radius = (size - strokeWidth) / 2 - 10; // Радиус круга
    const circumference = 2 * Math.PI * radius; // Длина окружности
    const offset = circumference - (value / 100) * circumference; // Смещение прогресса
    
    const theme = useTheme();

    if (value >= 85) {
        progressColor = theme.error
    }

    return (
        <svg width={size} height={size} className={className}>
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

            {/* Фон круга */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={dimAccent}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />

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
            />
        </svg>
    );
};
export default BaseWidget;
