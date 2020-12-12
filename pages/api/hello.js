const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async (req, res) => {
	await delay(1000)
	res.statusCode = 200
	res.json({ message: 'Hello! This message was fetched from a Next API route' })
}
