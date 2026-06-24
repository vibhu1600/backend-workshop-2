# Backend Workshop 2

A REST API built with Node.js and Express featuring JWT-based authentication, role-based user management, and MongoDB via Mongoose.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JSON Web Tokens (jsonwebtoken)
- **Password Hashing:** bcrypt
- **Validation:** express-validator
- **Dev Tooling:** nodemon

## Project Structure
backend-workshop-2/

├── app.js

├── config/

│   └── db.js

├── controllers/

│   ├── user.js

│   └── role.js

├── middlewares/

│   └── auth.js

├── models/

│   ├── user.js

│   └── role.js

├── routes/

│   ├── user.js

│   └── role.js

├── validators/

│   ├── user.js

│   └── validateInput.js

└── .env

## Setup

1. Clone the repository
git clone https://github.com/vibhu1600/backend-workshop-2.git

cd backend-workshop-2

2. Install dependencies
npm install

3. Create a `.env` file in the root:
JWT_SECRET=your_jwt_secret_here

MONGO_URI=mongodb://127.0.0.1:27017/myapp

PORT=5000

4. Start MongoDB locally

5. Run the server
npm start

## API Endpoints

### User Routes — `/user`

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/user/create` | No | Create a new user |
| POST | `/user/login` | No | Login and get JWT token |
| GET | `/user/all` | Yes | Get all users |
| GET | `/user/:id` | Yes | Get user by ID |
| PUT | `/user/update/:id` | Yes | Update a user |
| DELETE | `/user/delete/:id` | Yes | Delete a user |
| POST | `/user/logout` | Yes | Logout and invalidate token |

### Role Routes — `/role`

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/role/create` | No | Create a new role |
| GET | `/role/all` | No | Get all roles |

## Auth

Protected routes require this header:
Authorization: Bearer <token>

Tokens expire after 1 hour. Logging out invalidates the token by incrementing the user's version field.
