# Serviço de Produtos

Um microsserviço NestJS para gerenciamento de produtos, com integração a um serviço de estabelecimentos.

## Descrição

Este serviço fornece endpoints para gerenciar produtos, incluindo criação, listagem e recuperação. Ele se integra com um serviço de estabelecimentos para validar associações de produtos.

## Pré-requisitos

- Node.js (v14 ou superior)
- pnpm ou yarn
- Banco de dados PostgreSQL
- Docker (opcional)

## Instalação

```bash
# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com sua configuração do banco de dados

# Executar migrações do banco de dados
npx prisma migrate dev
```

## Executando a aplicação

```bash
# Desenvolvimento
npm run start

# Modo de observação
npm run start:dev

# Modo de produção
npm run start:prod
```

## Documentação da API

A documentação da API está disponível em `/v1/docs` quando a aplicação estiver em execução.

### Endpoints

#### Listar Produtos
- **GET** `/v1/product`
- **Parâmetros de Consulta:**
  - `page` (opcional): Número da página (padrão: 1)
  - `limit` (opcional): Itens por página (padrão: 10)
- **Resposta:**
  ```json
  {
    "data": [
      {
        "id": "uuid",
        "name": "string",
        "description": "string",
        "price": number,
        "available": boolean,
        "establishment_id": "string"
      }
    ],
    "meta": {
      "total": number,
      "page": number,
      "lastPage": number
    }
  }
  ```

#### Obter Produto por ID
- **GET** `/v1/product/:id`
- **Resposta:**
  ```json
  {
    "id": "uuid",
    "name": "string",
    "description": "string",
    "price": number,
    "available": boolean,
    "establishment_id": "string"
  }
  ```

#### Criar Produto
- **POST** `/v1/product`
- **Corpo da Requisição:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": number,
    "available": boolean,
    "establishment_id": "string"
  }
  ```
- **Resposta:** Objeto do produto criado

## Respostas de Erro

A API utiliza códigos de status HTTP padrão e retorna respostas de erro no seguinte formato:

```json
{
  "statusCode": number,
  "message": "string",
  "error": "string"
}
```

Códigos de erro comuns:
- 400: Requisição Inválida
- 404: Não Encontrado
- 500: Erro Interno do Servidor

## Variáveis de Ambiente

- `PORT`: Porta da aplicação (padrão: 3001)
- `DATABASE_URL`: String de conexão do PostgreSQL

## Licença

[Licenciado sob MIT](LICENSE)