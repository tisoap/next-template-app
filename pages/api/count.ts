import { delay } from 'utils'
import type { NextApiRequest, NextApiResponse } from 'next'

export type CountResponse = {
	count: number
}

export const count = async (
	req: NextApiRequest,
	res: NextApiResponse<CountResponse>
): Promise<void> => {
	await delay(1000)
	res.statusCode = 200
	return res.json({
		count: 2
	})
}

export default count
