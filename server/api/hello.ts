import type { NextApiRequest, NextApiResponse } from 'next'
import { delay } from 'utils'

export type HelloResponse = {
	message: string
}

export const hello = async (
	req: NextApiRequest,
	res: NextApiResponse<HelloResponse>
): Promise<void> => {
	await delay(1000)
	res.statusCode = 200
	return res.json({
		message: 'Hello! This message was fetched from a Next API route'
	})
}
