# GearGo Backend

This is the backend for the GearGo e-commerce platform.

## Tech Stack
- Node.js + Express
- MongoDB (Mongoose)
- Passport (Google OAuth)
- JWT for authentication
- RESTful API

## Features
- Product listing and detail APIs
- Order creation and management
- User management with Google OAuth
- Admin and rider-specific routes
- Email approval validation

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file with your MongoDB URI, Google OAuth credentials, and JWT secret.
3. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints
- `GET /api/products` — List products
- `GET /api/products/:id` — Product detail
- `POST /api/orders` — Create order
- `GET /api/orders` — List user/admin/rider orders
- `GET /api/auth/google` — Google OAuth login

See code for more details.
