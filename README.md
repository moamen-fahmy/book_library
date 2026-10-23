# Book Library

A full-stack CRUD app for cataloging books — React (Vite + React Router) frontend,
Express + Mongoose backend, Joi validation.

## Structure

```
book-library/
  server/   Express + Mongoose + Joi API
  client/   React + React Router DOM frontend
```

## Backend setup (`server/`)

1. `cd server`
2. `npm install`
3. Copy `.env.example` to `.env` and set your MongoDB connection string:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/book-library
   ```
   (Use a local MongoDB instance, or a free MongoDB Atlas connection string.)
4. `npm run dev` (requires `nodemon`, included as a dev dependency) or `npm start`
5. API runs at `http://localhost:5000`

### API endpoints

| Method | Route             | Description       |
|--------|--------------------|--------------------|
| GET    | /api/books          | List all books     |
| GET    | /api/books/:id       | Get one book       |
| POST   | /api/books          | Create a book       |
| PUT    | /api/books/:id       | Update a book       |
| DELETE | /api/books/:id       | Delete a book       |

Each book has: `title`, `author`, `genre` (all required strings, validated with Joi).

## Frontend setup (`client/`)

1. `cd client`
2. `npm install`
3. `npm run dev`
4. App runs at `http://localhost:5173` and talks to the API at `http://localhost:5000`

Make sure the backend is running first — the frontend's `src/api/api.js` points to
`http://localhost:5000/api/books`.

## Pages

- `/` — Catalog (list all books, delete, link to edit)
- `/add` — Add a new book
- `/edit/:id` — Edit an existing book

## Notes

- No authentication, Redux, or Context API — state is handled with `useState` / `useEffect`.
- Styling is plain CSS (`src/index.css`), no UI component libraries.
