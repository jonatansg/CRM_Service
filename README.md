# CRM_Service

API Test - The CRM service

## DESCRIPTION

The CRM Service is a REST API to manage customer data for a small shop.

## DB SCHEMAS

### USERS

| KEY      | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
| -------- | ------ | --------- | -------- | -------------- |
| username | string |           | YES      |                |
| email    | string |           | YES      | RegExp, Unique |
| password | string |           | YES      |                |
| role     | string |           | NO       |                |

### CUSTOMERS

| KEY     | TYPE   | REFERENCE | REQUIRED | VALIDATION |
| ------- | ------ | --------- | -------- | ---------- |
| id      | number |           | YES      |            |
| name    | string |           | YES      |            |
| surname | string |           | YES      |            |
| photo   | string |           | NO       |            |

## API ROUTES

### AUTHENTICATION ENDPOINTS

| METHOD | URL           | AUTH | FUNCTION            |
| ------ | ------------- | ---- | ------------------- |
| POST   | '/auth/login' | NO   | Authenticate a user |

### USERS ENDPOINTS

| METHOD | URL         | AUTH | FUNCTION            |
| ------ | ----------- | ---- | ------------------- |
| POST   | '/users/me' | YES  | Update user profile |

### CUSTOMERS ENDPOINTS

| METHOD | URL              | AUTH | FUNCTION                    |
| ------ | ---------------- | ---- | --------------------------- |
| POST   | '/customers/'    | YES  | Create a new customer       |
| GET    | '/customers/'    | YES  | Get customers list          |
| GET    | '/customers/:id' | YES  | Get customers profile       |
| PUT    | '/customers/:id' | YES  | Update customer information |
| DELETE | '/customers/:id' | YES  | Delete a customer           |
