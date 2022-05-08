import {
	Flex,
	HStack,
	Text,
	Center,
	Container,
	Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'
import type { ReactNode } from 'react'

const currentYear = new Date().getFullYear()

export interface LayoutProps {
	children: ReactNode
	year?: number
}

export const Layout = ({ year = currentYear, children }: LayoutProps) => {
	return (
		<Flex
			id='layout'
			flex={1}
			flexDirection='column'
			bg='background'
			height='100%'
			alignItems='center'
		>
			<Flex
				as='nav'
				flex={0}
				justifyContent='space-between'
				p={4}
				borderTop='3px solid'
				backgroundColor='foreground'
				borderTopColor='brand'
				boxShadow='base'
				width='100%'
			>
				<HStack spacing={4} fontSize='lg' userSelect='none'>
					<Link href='/' passHref>
						<ChakraLink>Home</ChakraLink>
					</Link>
					<Link href='/counter' passHref>
						<ChakraLink>Counter</ChakraLink>
					</Link>
					<Link href='/graph' passHref>
						<ChakraLink>Graph</ChakraLink>
					</Link>
				</HStack>
			</Flex>
			<Container as='main' flex={1} px={5} maxW='container.md'>
				{children}
			</Container>
			<Center as='footer' flex={0} width='100%'>
				<Text p={4}>Copyright &copy; {year} Tiso Alvarez Puccinelli</Text>
			</Center>
		</Flex>
	)
}
