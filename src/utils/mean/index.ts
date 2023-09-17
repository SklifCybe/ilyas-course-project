// Функция для вычисления среднего значения
export function mean(data: number[]): number {
	const sum = data.reduce((acc, val) => acc + val, 0);
	return sum / data.length;
}