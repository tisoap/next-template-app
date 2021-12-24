import { Button, Center, Text, Box } from '@chakra-ui/react'
import Head from 'next/head'

export interface HomeProps {
	loading?: boolean
	message?: string
	onClick(): void
}

export const Home = ({ loading, message, onClick }: HomeProps) => {
	const text = message || '...?'

	return (
		<>
			<Head>
				<title>App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Center height='100%' bg='gray.300' p={3}>
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
							id='home-page-button'
						>
							Click me
						</Button>
						<Text id='home-page-text' pb={2}>
							{text}
						</Text>
					</Center>
				</Box>
			</Center>
		</>
	)
}
