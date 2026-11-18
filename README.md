# ThinkBoard

ThinkBoard is a full-stack note-taking web app built with the MERN stack. It lets you create and view notes in a clean, responsive interface.

## Features
- View all notes as cards with title, content preview, and creation date
- Create new notes through a simple form
- Toast notifications for success and error feedback
- Loading and rate-limit states handled in the UI
- Responsive UI themed with DaisyUI (Nord)
- RESTful API for notes

## Tech Stack
**Frontend:** React, Vite, React Router, Tailwind CSS v4, DaisyUI, Axios, React Hot Toast, Lucide React
**Backend:** Node.js, Express, Mongoose
**Database:** MongoDB

## API Endpoints
| Method  | Endpoint         | Description   |
|---------|------------------|---------------|
| GET     | `/api/notes`     | Get all notes |
| POST    | `/api/notes`     | Create a note |
| PUT     | `/api/notes/:id` | Update a note |
| DELETE  | `/api/notes/:id` | Delete a note |

## Getting Started

### Backend
```bash
cd Backend
npm install
```
Create a `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Then run:
```bash
npm run dev
```

### Frontend
```bash
cd Frontend
npm install
npm run dev
```
The app runs on `http://localhost:5173`.
👩‍💻 Author
<br>
Sarah — @Sarah-SWE

<div align="center">

⭐ If you like this project, give it a star!

</div>
