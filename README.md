# Nutrabiotics Technical Test API

Backend API developed with NestJS, Prisma ORM, PostgreSQL, JWT Authentication and Swagger documentation.

---

# Overview

This project was developed as a technical test focused on backend architecture, authentication, authorization, relational database management and REST API best practices.

The application allows:

- User authentication with JWT
- Role Based Access Control (RBAC)
- Prescription management
- Prescription consumption tracking
- Metrics aggregation
- Swagger API documentation
- Global error handling and logging

---

# Repository Structure

```plaintext
NUTRABIOTICS-FULLSTACK/
│
├── backend/
├── frontend/
├── docs/
├── README.md
└── .gitignore
```

Main backend source code is located inside `/backend`.

---

# Tech Stack

## Backend

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication
- Passport
- Swagger
- Docker

---

# Features

## Authentication & Authorization

- JWT Authentication
- Protected Routes
- Passport JWT Strategy
- Role Based Access Control (RBAC)
- Admin protected endpoints

---

## Prescriptions Module

- Create prescriptions
- List prescriptions
- Consume prescriptions
- Prescription status tracking
- Doctor and Patient relationships

---

## Metrics

- Total prescriptions
- Active prescriptions
- Consumed prescriptions
- Expired prescriptions

---

## Engineering Features

- Global Validation Pipe
- DTO Validation
- Global Exception Filter
- Centralized Error Logging
- Modular Architecture
- Swagger Documentation

---

# Project Structure

```plaintext
backend/src/
├── auth/
│   ├── decorators/
│   ├── dto/
│   ├── guards/
│   ├── strategies/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
│
├── common/
│   └── filters/
│       └── http-exception.filter.ts
│
├── prescriptions/
│   ├── dto/
│   ├── prescriptions.controller.ts
│   ├── prescriptions.service.ts
│   └── prescriptions.module.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── users/
│
├── app.module.ts
└── main.ts
```

---

# Installation

## Clone repository

```bash
git clone https://github.com/AdrianAmaya-arch/nutrabiotics-backend-api.git
```

---

## Enter backend folder

```bash
cd backend
```

---

## Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file inside `/backend` based on `.env.example`.

Example:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/nutrabiotics?schema=public"

JWT_ACCESS_SECRET="super_secret_access_key"
```

The project requires PostgreSQL running locally or through Docker before executing migrations.

---

# Quick Start

```bash
npm install
docker compose up -d
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

---

# Docker

## Start PostgreSQL container

```bash
docker compose up -d
```

---

# Prisma

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run migrations

```bash
npx prisma migrate dev
```

---

## Prisma Studio

```bash
npx prisma studio
```

---

# Run Project

## Development mode

```bash
npm run start:dev
```

---

# Swagger Documentation

Swagger UI available at:

```plaintext
http://localhost:3000/api
```

---

# Main Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /auth/login | User login |
| GET | /auth/profile | Authenticated user profile |
| GET | /auth/admin | Admin protected route |

---

## Prescriptions

| Method | Endpoint | Description |
|---|---|---|
| POST | /prescriptions | Create prescription |
| GET | /prescriptions | Get all prescriptions |
| PATCH | /prescriptions/:id/consume | Consume prescription |
| GET | /prescriptions/metrics | Get metrics |

---

# Authentication

Protected endpoints require Bearer Token authentication.

Example:

```plaintext
Authorization: Bearer YOUR_TOKEN
```

---

# Database Models

## User

- id
- name
- email
- password
- role

---

## Prescription

- medicationName
- dosage
- frequency
- notes
- status
- prescribedAt
- consumedAt
- doctorId
- patientId

---

# Error Handling

The application includes:

- Global Exception Filter
- Centralized Error Logging
- HTTP Exception Handling

Example response:

```json
{
  "statusCode": 404,
  "timestamp": "2026-05-14T05:00:00Z",
  "path": "/invalid-route",
  "message": "Not Found"
}
```

---

# Technical Decisions

- Prisma ORM used for type-safe database access
- JWT used for stateless authentication
- RBAC implemented using decorators and guards
- Swagger used for API documentation
- ValidationPipe enabled globally
- Modular architecture following NestJS best practices
- Docker used for local PostgreSQL containerization

---

# Future Improvements

- Refresh Tokens
- Unit Testing
- E2E Testing
- Frontend Dashboard
- PDF Export
- Notifications System
- CI/CD Pipeline
- Redis Cache

---

# Author

Adrián Amaya