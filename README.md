### Projeto Star Wars
![git-StarWars](starWars2.gif)

## Introdução

Esta é uma aplicação React destinada a fornecer uma interface para filtrar e visualizar dados do universo Star Wars. A aplicação utiliza Context API e Hooks para controlar o estado global do React tornando-os reutilizáveis para criar uma tabela de dados interativa.

Certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/en/docs) (versões suportadas: 16 ou 18)
- [npm](https://docs.npmjs.com/) (gerenciador de pacotes Node.js)

## Tecnologias utilizadas <a name="tecnologias"></a>
- [**React**](https://legacy.reactjs.org/docs/getting-started.html)
- [**React-Router-Dom**](https://reactrouter.com/en/main)
- [**Tailwind**](https://v2.tailwindcss.com/docs)
- [**Jest**](https://jestjs.io/docs/getting-started)
- [**Linter**](https://eslint.org/docs/latest/)
- [**Mocha**](https://mochajs.org/)
- [**Hooks**](https://legacy.reactjs.org/docs/hooks-intro.html)
- [**Context API**](https://legacy.reactjs.org/docs/context.html)

## Instalação

1. Clone este repositório para o seu sistema local:

```bash
git clone git@github.com:georgia-rocha/Star-Wars.git
```

2. Entre na pasta que você acabou de clonar:

```bash
  cd Star-Wars
```

3.  Instale as dependências:

```bash
  npm install
```

## Scripts

1. Iniciar o servidor de desenvolvimento:

```bash
   npm start
```

2. Criar uma versão otimizada para produção da aplicação.

```bash
    npm run build
```

3. Executar os testes da aplicação:

```bash
    npm test
```

4. Executar os testes da aplicação e gerar um relatório de cobertura:

```bash
    npm run test-coverage:
```

5. Executar o linter para verificação dos arquivos de estilo CSS:

```bash
  npm run lint:styles
```

6. Executar o linter para verificação dos arquivos JavaScript e JSX.

```bash
    npm run lint
```

7. Executar os testes de integração/end-to-end usando o Cypress:

```bash
    npm run cy
```

8. Abrir a interface do Cypress para executar testes interativos:

```bash
    npm run cy:open
```

## Requisitos

- [x] 1 - Requisição para o endpoint /planets da API de Star Wars e tabela preenchida com os dados retornados, com exceção dos dados da coluna residents;
- [x] 2 - Criado filtro de texto para buscar na tabela os planetas através do nome;
- [x] 3 - Criado filtro para valores numéricos com label 'coluna', 'operador' e um input do type number para valor a ser filtrado;
- [x] 4 - Implementei múltiplos filtros numéricos referente ao requisito anterior;
- [x] 5 - Não é possivel utilizar filtros repetidos;
- [x] 6 - É possivel apaguar um filtro de valor numérico ao clicar no ícone de remover de um dos filtros ou apagar todas filtragens numéricas simultaneamente ao clicar no botão de Remover todas filtragens;
- [x] 7 - A aplicação apresenta cobertura superior a 60%;
- [ ] 8 - Ordenar as colunas de forma ascendente ou descendente;
