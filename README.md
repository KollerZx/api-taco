# API TABELA TACO
O projeto TACO (Tabela Brasileira de Composição de Alimentos) tem como objetivo gerar dados sobre
a composição dos principais alimentos consumidos no Brasil, baseado em um plano de amostragem que garanta
valores representativos, com análises realizadas por laboratórios com capacidade analítica comprovada através
de estudos interlaboratoriais, a fim de assegurar a confiabilidade dos resultados.
Para saber mais, consulte o [Site Oficial](https://www.nepa.unicamp.br/taco/home.php?ativo=home)

## Rodando Localmente

```bash
git clone https://github.com/KollerZx/api-taco.git
```

Instalar todas dependências e executar:

```bash
cd api-taco
npm install || yarn
npm start || yarn start
```

Feito isso, para consultar a documentação acesse `http:localhost:4444/v1/docs`

## Sobre o Projeto

O intuito desse projeto foi fornecer os dados da tabela de forma simplificada para consulta em uma API, que será consumida pelo software de nutrição que estou desenvolvendo.
Para isso foi utilizado os dados ja compilados no formato JSON do Projeto do desenvolvedor [Raul Melo](https://github.com/raulfdm/taco-api)

## 🛠️ Tecnologias Utilizadas

* [NodeJs](https://nodejs.org/pt-br/) - Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/pt-br/) - O framework web usado
* [Swagger](https://www.npmjs.com/package/swagger-ui-express) - framework para documentação de APIs


## Informações Legais

Os dados disponibilizados na API foram pesquisados e produzidos pela [UNICAMP](https://www.unicamp.br/unicamp/), todos os direitos autorais estão reservados à Instituição.


