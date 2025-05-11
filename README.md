# Product Service

A NestJS microservice for managing products, with integration to an establishment service.

## Description

This service provides endpoints to manage products, including creation, listing, and retrieval. It integrates with an establishment service to validate product associations.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database
- Docker (optional)

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database configuration

# Run database migrations
npx prisma migrate dev
```

## Running the app

```bash
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

## API Documentation

The API documentation is available at `/v1/docs` when running the application.

### Endpoints

#### List Products
- **GET** `/v1/product`
- **Query Parameters:**
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10)
- **Response:**
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

#### Get Product by ID
- **GET** `/v1/product/:id`
- **Response:**
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

#### Create Product
- **POST** `/v1/product`
- **Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": number,
    "available": boolean,
    "establishment_id": "string"
  }
  ```
- **Response:** Created product object
- **Status Codes:**
  - 201: Product created successfully
  - 400: Invalid request data
  - 404: Establishment not found

#### Update Product
- **PUT** `/v1/product/:id`
- **Body:**
  ```json
  {
    "name": "string",
    "description": "string",
    "price": number,
    "available": boolean,
    "establishment_id": "string"
  }
  ```
- **Response:** Updated product object
- **Status Codes:**
  - 200: Product updated successfully
  - 400: Invalid request data
  - 404: Product or establishment not found

#### Validate Products
- **POST** `/v1/product/validate`
- **Body:**
  ```json
  {
    "ids": ["uuid1", "uuid2"]
  }
  ```
- **Response:**
  ```json
  {
    "valid": boolean
  }
  ```

## Error Responses

The API uses standard HTTP status codes and returns error responses in the following format:

```json
{
  "statusCode": number,
  "message": "string",
  "error": "string"
}
```

Common error codes:
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## Environment Variables

- `PORT`: Application port (default: 3001)
- `DATABASE_URL`: PostgreSQL connection string

## License

[MIT licensed](LICENSE)