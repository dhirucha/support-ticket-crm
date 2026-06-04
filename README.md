# Customer Support Ticketing CRM

Live Demo: https://support-ticket-crm.vercel.app/

## Overview

Customer Support Ticketing CRM is a full-stack web application designed to help support teams manage customer issues efficiently. The system allows users to create support tickets, search and filter tickets, update ticket statuses, add notes, and track support activities through a clean and responsive dashboard.

The application is built using FastAPI, SQLAlchemy, SQLite, React, Vite, Tailwind CSS, and Axios, following a modular architecture with RESTful APIs.

---

## Features

### Ticket Management

* Create support tickets with customer details
* Auto-generated Ticket IDs (TKT-001 format)
* Automatic timestamp generation
* View detailed ticket information

### Search & Filtering

* Search tickets by:

  * Ticket ID
  * Customer Name
  * Customer Email
  * Subject
  * Description
* Filter tickets by status:

  * Open
  * In Progress
  * Closed

### Ticket Updates

* Update ticket status
* Add notes/comments to tickets
* Automatic update timestamp tracking

### Dashboard

* Total Tickets Count
* Open Tickets Count
* In Progress Tickets Count
* Closed Tickets Count
* Recent Activity Section

### User Experience

* Responsive Design
* Modern Dashboard UI
* Status Badges
* Loading States
* Empty States
* Error Handling

---

## Tech Stack

### Backend

* FastAPI
* SQLAlchemy ORM
* SQLite
* Pydantic
* CORS Middleware

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Deployment

* Frontend: Vercel
* Backend: Railway

---

## Project Architecture

```text
support-ticket-crm/
│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   ├── dependencies.py
│   │   ├── utils.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

## Database Schema

### Tickets Table

| Field          | Type            |
| -------------- | --------------- |
| id             | Integer         |
| ticket_id      | String (Unique) |
| customer_name  | String          |
| customer_email | String          |
| subject        | String          |
| description    | Text            |
| status         | String          |
| created_at     | DateTime        |
| updated_at     | DateTime        |

### Notes Table

| Field      | Type     |
| ---------- | -------- |
| id         | Integer  |
| ticket_fk  | Integer  |
| note_text  | Text     |
| created_at | DateTime |

---

## API Endpoints

### Create Ticket

```http
POST /api/tickets
```

### Get All Tickets

```http
GET /api/tickets
```

Supports:

```http
GET /api/tickets?search=john
GET /api/tickets?status=Open
```

### Get Ticket Details

```http
GET /api/tickets/{ticket_id}
```

### Update Ticket

```http
PUT /api/tickets/{ticket_id}
```

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd support-ticket-crm
```

---

### Backend Setup

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
```

Windows:

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

Run:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Environment Variables

### Backend

```env
DATABASE_URL=sqlite:///./tickets.db
CORS_ORIGINS=http://localhost:5173
```

### Frontend

```env
VITE_API_URL=http://localhost:8000/api
```

---

## Deployment

### Frontend

Deployed on Vercel

Live URL:

https://support-ticket-crm.vercel.app/

### Backend

Deployed on Railway

REST API served through FastAPI.

---

## Challenges Faced

* Designing a clean relational database schema
* Implementing dynamic search across multiple fields
* Managing ticket status updates and notes
* Handling frontend-backend integration
* Resolving deployment and CORS configuration issues
* Creating a responsive and user-friendly dashboard

---

## Future Improvements

* Authentication & Authorization (JWT)
* Ticket Assignment System
* Priority Levels (Low, Medium, High, Critical)
* Pagination
* Email Notifications
* CSV Export
* Analytics Dashboard
* Dark Mode Support

---

## Key Learnings

* Full-stack application architecture
* REST API development using FastAPI
* SQLAlchemy ORM relationships
* React state management and API integration
* Deployment workflows using Railway and Vercel
* Production debugging and CORS handling

---

Screenshots- 
<img width="1815" height="830" alt="Screenshot 2026-06-04 092704" src="https://github.com/user-attachments/assets/f7817efe-19d9-4241-b5da-8cc22543b646" />
<img width="727" height="242" alt="Screenshot 2026-06-04 082226" src="https://github.com/user-attachments/assets/23517601-f5ba-4225-b594-6dc53802c1be" />
<img width="701" height="362" alt="Screenshot 2026-06-04 081400" src="https://github.com/user-attachments/assets/6ab63683-3df1-4838-adc8-37c91705d19b" />



## Author

**Dheeraj Chaubey**

Full Stack Developer

Built as part of the Datastraw Technologies Full Stack Assessment.
