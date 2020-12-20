# Next Template APP

Este projeto foi iniciado com o template [next-template-app](https://github.com/tisoap/next-template-app).

## Requerimentos

- [Git](https://git-scm.com/)
- [Node (versão 14 ou superior)](https://nodejs.org/en/)
- [Yarn (versão 1.22 ou superior)](https://yarnpkg.com/lang/en/)

## Instalação e inicialização do projeto

Clone o projeto, navegue para a raíz do projeto em um terminal e execute os seguintes comandos:

```bash
$ yarn
$ yarn dev
```

## Comandos

- `yarn build`: Cria um build de produção do projeto
- `yarn build:storybook`: Cria um build de produção da biblioteca de componentes
- `yarn dev`: Inicia o projeto com hot reload em `http://localhost:3000`
- `yarn lint:code`: Linter de código com correção automática
- `yarn lint:style`: Linter de folhas de estilo com correção automática
- `yarn start`: Inicia o projeto em `http://localhost:3000`, sendo necessário ter executado `yarn build` antes
- `yarn storybook`: Inicia a biblioteca de componentes com hot reload em `http://localhost:6006`
- `yarn test`: Roda todos os testes automatizados do projeto e o reporte de cobertura de testes
- `yarn test:watch`: Roda os testes de forma interativa, re-executando a cada alteração no projeto

## Tecnologias

Este template conta com:

- Framework [Next.js](https://nextjs.org/)
- Gerenciamento de estado e side effects com [Redux Toolkit](https://redux-toolkit.js.org/)
- Biblioteca de componentes [Chakra UI](https://chakra-ui.com/)
- Testes automatizados com [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- Continuous Integration com [GitHub Actions](https://github.com/features/actions)
- Documentação de componentes com [Storybook](https://storybook.js.org/)
- Suporte a estilos [Sass](https://sass-lang.com/)
- Padronização de estilos com [ESLint](https://eslint.org/) e [StyleLint](https://stylelint.io/)
