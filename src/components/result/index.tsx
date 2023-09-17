import {FC} from 'react';
import {Text, Button} from '@chakra-ui/react';

import {calculateLinearRegression} from "../../utils/calculate-linear-regression";
import {calculateCorrelation} from "../../utils/calculate-correlation";
import {semiLogRegression} from "../../utils/semi-log-regression";

type Props = {
	rows: Array<{ x: string; y: string }>;
	onResetResult: () => void;
};

export const Result: FC<Props> = ({rows, onResetResult}) => {
	const xData = rows.map((row) => Number(row.x));
	const yData = rows.map((row) => Number(row.y));

	// Вычисляем коэффициент корреляции
	const correlation = calculateCorrelation(xData, yData);
	// Вычисляем линейную регрессию
	const {slope, intercept} = calculateLinearRegression(xData, yData);
	// Вычисляем полулогарифмическую регрессию
	const {a, b} = semiLogRegression(xData, yData);

	return (
		<>
			<Text fontSize='6xl'>Result</Text>
			<Text fontSize='lg'>Correlation: {correlation.toFixed(2)}</Text>
			<Text fontSize='lg'>Linear model: y = {slope.toFixed(2)}x + {intercept.toFixed(2)}</Text>
			<Text fontSize='lg'>Semi-logarithmic model: a = {a.toFixed(2)} и b = {b.toFixed(2)}</Text>
			<Button onClick={onResetResult}>Reset result</Button>
		</>
	)
};