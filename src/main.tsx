import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import {MainPage} from './pages/main'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<MainPage/>
		</ChakraProvider>
	</React.StrictMode>,
)
