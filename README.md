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

## Instruções Iniciais
* Cadastrar usuários (Rota POST /user):
    * A rota é privada, assim deve-utilizar a API KEY para chama-la.
    * Header: x-api-key : {{API KEY}}
* Gerar token de autenticação (Rota POST /auth):
    * A rota é aberta, então utilizando o login e senha do usuário, irá ser retornado um token.
* Utilização do token nas demais rotas:
    * Todas demais rotas precisam de autenticação para serem utilizadas.
    * Header: Authorization : {{token}} (não é necessário o uso de prefixos).

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