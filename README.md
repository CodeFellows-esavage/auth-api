# auth-api
Creating an authenticated API server that utilizes Role Based Access Control (RBAC) using an Access Control List (ACL) for code401 Lab 08.

- Starter Code Provided By: Code Fellows
- Developed By: Erik Savage

Deployment URL: https://esavage-auth-api.herokuapp.com/

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/auth-api.git`
- `cd` into auth-api
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Models

### User
```
'Users', {
    username: string, required,
    password: string, required,
    role: one of('user', 'writer', 'editor', 'admin'), required,
    token: required,
    capabilities: acl ['read', 'create', 'update', 'delete'],
}
```

### Clothes
```
'Clothes', {
  name: string, required,
  color: string, required,
  size: string, required,
}
```
### Food
```
'Food', {
  name: string, required,
  calories: number, required,
  type: ('fruit', 'vegetable', 'protein'), required,
}
```

## Routes

### api/v1 (no authentication required)
- POST `/:model` 
  - requires model param and obj
  - returns created obj from database
- GET `/:model` 
  - requires model param
  - returns all objs from model database table
- GET `/:model/:id` 
  - requires model and id params
  - returns object in model database with that specific id 
- PUT `/:model/:id` 
  - requires model and id params plus obj to update
  - returns updated obj
- DELETE `/:model/:id` 
  - requires model and id params
  - returns status code either successful or not

### api/v2 (authentication required)
- POST `/:model` 
  - requires model param, obj, token and acl with create permissions
  - returns created obj from database
- GET `/:model` 
  - requires model param, basic auth and acl with read permissions
  - returns all objs from model database table
- GET `/:model/:id` 
  - requires model and id params, basic auth and acl with read permissions
  - returns object in model database with that specific id 
- PUT `/:model/:id` 
  - requires model and id params plus obj to update, token and acl with write permissions
  - returns updated obj
- DELETE `/:model/:id` 
  - requires model and id params, token and acl with delete permissions
  - returns status code either successful or not

### Signup
-  POST `/signup`, requires a user object: returns created user object from database

### Signin
-  POST `/signin`, requires a user object: returns validated user object from database with token

### Users
-  GET `/users`, requires a validated token: returns array of usernames in the database

### Secret
-  GET `/secret`, requires a validated token: string - Welcome to the secret area!

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- complete testing of the routers bearer auth middleware, and the basic auth middleware

## Resources
- sequelize docs
- jest docs
- supertest docs
- http cats
- Code Fellows
  - Kellen Linse
  - Daniel Jackson
