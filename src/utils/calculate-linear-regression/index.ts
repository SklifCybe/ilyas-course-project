import { mean } from '../mean';

// Функция для вычисления линейной регрессии
export function calculateLinearRegression(x: number[], y: number[]): { slope: number; intercept: number } {
	const xMean = mean(x);
	const yMean = mean(y);

	let numerator = 0;
	let denominator = 0;

	for (let i = 0; i < x.length; i++) {
		const xDiff = x[i] - xMean;
		const yDiff = y[i] - yMean;
		numerator += xDiff * yDiff;
		denominator += xDiff * xDiff;
	}

	const slope = numerator / denominator;
	const intercept = yMean - slope * xMean;

	return { slope, intercept };
}