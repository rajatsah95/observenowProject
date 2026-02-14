# 📒 Saved Contacts — Full Stack Application

A simple full-stack **Saved Contacts** app where users can:

- View contacts
- Add new contacts
- Delete contacts
- Search by name or company

---

## 🧰 Tech Stack

### Frontend
- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- React Hook Form
- Zod Validation

### Backend
- Node.js
- Express.js
- Drizzle ORM
- SQLite (better-sqlite3)
- Zod Validation

---

# 📂 Project Structure

saved-contacts-app/
│
├── backend/
│ ├── src/
│ │ ├── db/
│ │ │ ├── index.ts
│ │ │ └── schema.ts
│ │ ├── routes/
│ │ │ └── contacts.ts
│ │ ├── validation/
│ │ │ └── contact.ts
│ │ └── server.ts
│ ├── contacts.db
│ ├── package.json
│ └── tsconfig.json
│
├── frontend/
│ ├── src/
│ ├── index.html
│ ├── package.json
│ └── tailwind.config.js
│
└── README.md



⚙️ Backend Setup
Go to backend
cd backend

Install dependencies
npm install

Start backend server
npm run dev


Backend runs at:

http://localhost:4000


Database file contacts.db will be created automatically.

🎨 Frontend Setup
Go to frontend
cd frontend

Install dependencies
npm install

Start frontend
npm run dev


Frontend runs at:

http://localhost:5173

🔗 Backend APIs
✅ Get Contacts
Request
GET /api/contacts

Search
GET /api/contacts?search=john

Response
[
  {
    "id": 1,
    "name": "Rajat",
    "email": "rajat@gmail.com",
    "phone": "9876543210",
    "company": "ObserveNow",
    "created_at": "2026-02-14"
  }
]

✅ Add Contact
Request
POST /api/contacts

Body
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9999999999",
  "company": "Google"
}

Response
{
  "id": 2,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9999999999",
  "company": "Google",
  "created_at": "2026-02-14"
}

✅ Delete Contact
Request
DELETE /api/contacts/2

Response
{
  "success": true
}
