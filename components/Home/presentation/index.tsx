import { Button, Center, Text, Box } from '@chakra-ui/react'
import Head from 'next/head'
import type { VoidFunctionComponent } from 'react'

export interface HomeProps {
	loading?: boolean
	message?: string
	onClick(): void
}

export const Home: VoidFunctionComponent<HomeProps> = ({
	loading,
	message,
	onClick
}) => {
	const text = message || '...?'

	return (
		<>
			<Head>
				<title>App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Center height='100%' bg='gray.200' p={3}>
				<Box
					as='main'
					w='100%'
					h='100%'
					maxW='500px'
					maxH='300px'
					boxShadow='md'
					p='6'
					rounded='md'
					bg='white'
				>
					<Center h='100%' display='flex' flexDirection='column'>
						<Button
							onClick={() => onClick()}
							isLoading={loading}
							colorScheme='blue'
							mb={3}
						>
							Click me
						</Button>
						<Text pb={2}>{text}</Text>
					</Center>
				</Box>
			</Center>
		</>
	)
}
