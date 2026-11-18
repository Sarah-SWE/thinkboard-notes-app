# ThinkBoard

ThinkBoard is a full-stack note-taking web app built with the MERN stack. It lets you create, view, edit, and delete notes in a clean, responsive interface.

🔗 **Live Demo:** [https://thinkboard-notes-app-as3b.onrender.com](https://thinkboard-notes-app-as3b.onrender.com)

> ⚠️ The app is hosted on Render's free tier, so the first request may take up to 50 seconds while the server wakes up.

## Features
- View all notes as cards with title, content preview, and creation date
- Create new notes through a simple form
- Edit and delete existing notes
- Toast notifications for success and error feedback
- Loading and rate-limit states handled in the UI
- Rate limiting on the API using Upstash Redis
- Responsive UI themed with DaisyUI (Nord)
- RESTful API for notes

## Tech Stack
**Frontend:** React, Vite, React Router, Tailwind CSS v4, DaisyUI, Axios, React Hot Toast, Lucide React
**Backend:** Node.js, Express, Mongoose
**Database:** MongoDB (Atlas)
**Rate Limiting:** Upstash Redis
**Deployment:** Render

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
