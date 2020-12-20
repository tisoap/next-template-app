import type { NextApiRequest, NextApiResponse } from 'next'

export type HelloResponse = {
	message: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async (
	req: NextApiRequest,
	res: NextApiResponse<HelloResponse>
): Promise<void> => {
	await delay(1000)
	res.statusCode = 200
	res.json({
		message: 'Hello! This message was fetched from a Next API route'
	})
}
