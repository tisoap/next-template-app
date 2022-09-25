import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'

// eslint-disable-next-line react-prefer-function-component/react-prefer-function-component
class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript initialColorMode='light' />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
