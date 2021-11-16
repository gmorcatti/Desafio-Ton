# Desafio TON
## API que conta o número de acessos ao site do Ton e permitir que um usuário crie uma conta.

***

## Autor
* Gabriel Morcatti - gabriel.morcatti@yahoo.com.br

## Tecnologias Utilizadas
* NodeJs
* Serverless Framework
* AWS Lambda Functions
* AWS API Gateway
* AWS DynamoDB

## Rotas
* POST /user - Criação de novo usuário.
* POST /auth - Login e Autenticação de usuário, retorna o TOKEN.
* GET /user/{id} - Consulta usuário pelo ID.
* POST /counter/hit - Incrementa o contador.
* GET /counter - Analisa valor atual do contador.

## Pré-requisitos
* AWS CLI configurado
* Serverless Framework instalado
* NodeJs instalado
* Parametrização de todo arquivo "example.env" e transforma-lo em um ".env"

## Deploy
O deploy é realizado pelo próprio arquivo de configuração serverless.yml
Nele são realizadas as seguintes ações:
- Criação da tabela do DynamoDB
- Criação das Lambda functions
- Configuração da API Gateway apontando para cada function
- Configuração de quais rotas são privadas (api key) e quais precisam de autenticação (auth route - jwt token)

Rodar o seguinte comando no terminal dentro da pasta do projeto:
```
serverless deploy --verbose
```