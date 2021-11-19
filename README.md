# Next Template APP

This project was bootstrapped using [next-template-app](https://github.com/tisoap/next-template-app).

## Requirements

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Chrome](https://www.google.com/intl/en-US/chrome/)

## Installation and project initialization

Clone this project using Git. In a terminal, navigate to the cloned project's root folder, and run the following command:

```bash
yarn && yarn dev
```

Once ready, open [localhost:3000](http://localhost:3000) in you browser.

## Commands

- `yarn build`: Creates a production build from this project
- `yarn build-storybook`: Creates a production build from the component library docs
- `yarn dev`: Starts the project with hot reload at `http://localhost:3000`
- `yarn lint-code`: Runs the code linter
- `yarn lint-style`: Runs the stylesheet linter
- `yarn start`: Starts the project at `http://localhost:3000`, but you need to execute the `yarn build` command beforehand
- `yarn storybook`: Starts the component library docs with hot reload at `http://localhost:6006`
- `yarn test`: Runs all unit tests and code coverage report
- `yarn test`: Runs all end to end tests using the locally installed Chrome browser, but you need to have started the project in another terminal for it to work
- `yarn test-watch`: Runs all unit tests in watch mode, re-executing the relevant tests at every file change

## Technologies

This template uses:

- [Next.js](https://nextjs.org/) framework
- [TypeScript](https://www.typescriptlang.org/) type checking
- [Chakra UI](https://chakra-ui.com/) as the default component library
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit tests
- [TestCafé](https://devexpress.github.io/testcafe/) for End-to-End tests
- [Chromatic](https://www.chromatic.com/) for visual regression testing
- [GitHub Actions](https://github.com/features/actions) and [Vercel](https://vercel.com/) for CI/CD pipelines
- [Storybook](https://storybook.js.org/) for component documentation
- [Sass](https://sass-lang.com/) support
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [StyleLint](https://stylelint.io/) for code style standardization
- [Yarn](https://yarnpkg.com/) for caching project dependencies
