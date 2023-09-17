import { mean } from '../mean';

// Функция для вычисления коэффициента корреляции
export function calculateCorrelation(x: number[], y: number[]): number {
	const xMean = mean(x);
	const yMean = mean(y);

	let numerator = 0;
	let denominatorX = 0;
	let denominatorY = 0;

	for (let i = 0; i < x.length; i++) {
		const xDiff = x[i] - xMean;
		const yDiff = y[i] - yMean;
		numerator += xDiff * yDiff;
		denominatorX += xDiff * xDiff;
		denominatorY += yDiff * yDiff;
	}

	return numerator / Math.sqrt(denominatorX * denominatorY);
}