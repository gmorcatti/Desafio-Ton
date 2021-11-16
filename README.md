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
   * Body: application/json
   * ```Exemplo: { email: "teste@teste.com", password: "123456" }```
* POST /auth - Login e Autenticação de usuário, retorna o TOKEN.
   * Body: application/json
   * ```Exemplo: { email: "teste@teste.com", password: "123456" }```
* GET /user/{id} - Consulta usuário pelo ID.
* POST /counter/hit - Incrementa o contador.
* GET /counter - Analisa valor atual do contador.

## Pré-requisitos
* AWS CLI configurado
* Serverless Framework instalado
* NodeJs instalado
* Parametrização de todo arquivo "example.env" e transforma-lo em um ".env"

### .ENV
As variáveis de ambiente deste projeto são:
* AWS_ACCESS_KEY_ID_ADMIN - AccessKeyId do IAM da AWS com permissões de admin geral.
* AWS_SECRET_ACCESS_KEY_ADMIN - SecretAccessKey do IAM da AWS com permissões de admin geral.
* AWS_DEFAULT_REGION_ADMIN - String com a região padrão que os artefatos serão hospedados. EX: us-east-1
* COUNTAPI_NAMESPACE - Namespace para ser utilizado no CountAPI. EX: 'ton_counter'
* COUNTAPI_KEY - Key para ser utilizado no CountAPI. EX: 'E8CE61377EBEE67C0698D91E2F694257'
* JWT_SECRET - Secret do JWT para criptografar e decifrar o token.

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
