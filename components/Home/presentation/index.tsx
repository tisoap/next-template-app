import {
	Button,
	Center,
	Text,
	Box,
	Link,
	useColorModeValue
} from '@chakra-ui/react'
import Head from 'next/head'

export interface HomeProps {
	loading?: boolean
	message?: string
	onClick(): void
}

export const Home = ({ loading, message, onClick }: HomeProps) => {
	const text = message || '...?'

	const background = useColorModeValue('gray.50', 'gray.800')
	const foreground = useColorModeValue('white', 'gray.700')

	return (
		<>
			<Head>
				<title>App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Center height='100%' p={3} backgroundColor={background}>
				<Box
					as='main'
					w='100%'
					h='100%'
					maxW='500px'
					maxH='300px'
					boxShadow='md'
					p='6'
					rounded='md'
					bg={foreground}
				>
					<Center h='100%' display='flex' flexDirection='column'>
						<Text mb={4}>
							Check the instructions on how to use this template&nbsp;
							<Link
								color='blue.500'
								textDecoration='underline'
								href='https://github.com/tisoap/next-template-app#next-template-app'
								isExternal
							>
								here
							</Link>
							.
						</Text>
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
