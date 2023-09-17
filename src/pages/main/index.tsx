import {ChangeEvent, useState, useEffect} from 'react';
import {Input, Button, Text} from '@chakra-ui/react';

import {BasicTable} from "../../components/basic-table";

import styles from './index.module.css';
import {Result} from "../../components/result";

type Row = {
	x: string;
	y: string;
};

export const MainPage = () => {
	const [showTable, setShowTable] = useState(false);
	const [sizeOfTable, setSizeOfTable] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [rows, setRows] = useState<Array<Row>>([]);

	useEffect(() => {
		setRows(new Array(Number(sizeOfTable)).fill({ x: '', y: '' }));
	}, [sizeOfTable]);

	const handleSizeOfTableChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSizeOfTable(event.target.value);
	};

	const handleChangeStatusTableClick = (status: boolean) => () => setShowTable(status);

	const handleChangeStatusResultClick = (status: boolean) => () => setShowResult(status);

	return (
		<main className={styles.wrapper}>
			{
				showTable ? (
					<>
						<Button colorScheme='red' onClick={handleChangeStatusTableClick(false)}>Remove the table</Button>
						<BasicTable rows={rows} setRows={setRows}/>
						<Button onClick={handleChangeStatusResultClick(true)}>Calculate</Button>
					</>) : (
					<>
						<Text sx={{ textAlign: 'center'}}>
							Application for conducting correlation and regression analysis. Linear and semi-logarithmic model
						</Text>
						<Input placeholder='Enter size of table...' value={sizeOfTable} onChange={handleSizeOfTableChange}/>
						<Button onClick={handleChangeStatusTableClick(true)}>Create the table</Button>
					</>
				)
			}
			{
				showResult && <Result rows={rows} onResetResult={handleChangeStatusResultClick(false)} />
			}
		</main>
	)
		;
};