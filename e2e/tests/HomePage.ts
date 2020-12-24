import { Selector } from 'testcafe'

import { TEST_URL } from '../constants'

fixture`Home Page`.page`${TEST_URL}`

test('Gets message from API route', async (t) => {
	const text = Selector('#home-page-text').innerText
	const button = Selector('#home-page-button').withText('Click me')

	await t
		.expect(text)
		.eql('...?')
		.click(button)
		.expect(text)
		.eql('Hello! This message was fetched from a Next API route')
})
