import {ChangeEvent, FC, Dispatch, SetStateAction} from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Input
} from '@chakra-ui/react'

type Props = {
	rows: Array<{ x: string; y: string }>;
	setRows: Dispatch<SetStateAction<Array<{ x: string; y: string }>>>
};

export const BasicTable: FC<Props> = ({rows, setRows}) => {
	const handleTableValueChange = (index: number, position: 'x' | 'y') => (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setRows((prevRows) => {
			return prevRows.map((row, id) => {
				if (index === id) {
					return position === 'x' ? {...row, x: value} : {...row, y: value};
				}
				return row;
			})
		});
	};

	return (
		<TableContainer>
			<Table variant='striped'>
				<Thead>
					<Tr>
						<Th>Index</Th>
						<Th>Column X</Th>
						<Th>Column Y</Th>
					</Tr>
				</Thead>
				<Tbody>
					{
						rows.map((row, index) => (
							<Tr key={index}>
								<Td>{index + 1}</Td>
								<Td>
									<Input
										sx={{border: '1px'}}
										value={row.x}
										onChange={handleTableValueChange(index, 'x')}
									/>
								</Td>
								<Td>
									<Input
										sx={{border: '1px'}}
										value={row.y}
										onChange={handleTableValueChange(index, 'y')}
									/>
								</Td>
							</Tr>
						))
					}
				</Tbody>
			</Table>
		</TableContainer>
	);
}