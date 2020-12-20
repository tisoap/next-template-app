import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
): Promise<void> => {
	await delay(1000)
	res.statusCode = 200
	res.json({
		message: 'Hello! This message was fetched from a Next API route'
	})
}
