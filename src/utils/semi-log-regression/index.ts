export function semiLogRegression(x: number[], y: number[]): { a: number; b: number } {
	// Проверка на одинаковое количество x и y
	if (x.length !== y.length) {
		throw new Error("Количество значений x и y должно быть одинаковым.");
	}

	const n = x.length;
	let sumX = 0;
	let sumY = 0;
	let sumXY = 0;
	let sumX2 = 0;

	for (let i = 0; i < n; i++) {
		sumX += Math.log(x[i]); // Полулогарифм независимой переменной
		sumY += y[i];
		sumXY += Math.log(x[i]) * y[i];
		sumX2 += Math.log(x[i]) ** 2;
	}

	const a = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
	const b = (sumY - a * sumX) / n;

	return { a, b };
}