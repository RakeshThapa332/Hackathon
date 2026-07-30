
# 📦 Installation

Clone the repository

```bash
git clone https://github.com/RakeshThapa332/Hackathon.git
```

Move inside the project

```bash
cd Hackathon
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📚 Required Libraries

```bash
npm install react-router-dom axios framer-motion recharts react-dropzone react-hook-form lucide-react
```

```bash
npm install @mui/material @emotion/react @emotion/styled
```

```bash
npm install @mui/icons-material
```

```bash
npm install react-icons
```

---

# 🌿 Git Workflow

## First Time

```bash
git clone https://github.com/RakeshThapa332/Hackathon.git

cd Hackathon

npm install

npm run dev
```

---

## Before Starting Work

```bash
git pull origin main
```

---

## After Finishing Work

```bash
git add .

git commit -m "Describe your changes"

git push origin main
```

---

# 📋 Branch Strategy

Do **not** work directly on `main`.

Create your own branch.

Example:

```bash
git checkout -b feature/dashboard-ui
```

Push your branch

```bash
git push origin feature/dashboard-ui
```

Merge using Pull Requests.

---



# 📖 Coding Guidelines

- Use functional components.
- One component per file.
- Keep components reusable.
- Use PascalCase for components.
- Use camelCase for variables.
- Keep files small and focused.

---

# 📜 Folder Naming

Components

```
MetricCard.jsx
Sidebar.jsx
ChatWindow.jsx
```

Hooks

```
useAuth.js
useTheme.js
```

Pages

```
Dashboard.jsx
Analytics.jsx
```

---
#Backend

# Tech Stack

- Python 3.11+
- Flask
- PostgreSQL
- SQLAlchemy
- Flask-Migrate
- pgvector
- Sentence Transformers
- Groq API
- PyMuPDF
- pdfplumber
- python-docx
- python-pptx
- EasyOCR
- JWT Authentication

---


---

# Clone Repository

```bash
git clone <repository-url>
```

Go inside backend

```bash
cd backend
```

---

# Create Virtual Environment

### Windows

```bash
python -m venv venv
```

Activate

```powershell
venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv venv

source venv/bin/activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

If requirements.txt is missing

```bash
pip install flask
pip install flask-cors
pip install flask-sqlalchemy
pip install flask-migrate
pip install psycopg2-binary
pip install python-dotenv
pip install pymupdf
pip install pdfplumber
pip install python-docx
pip install python-pptx
pip install sentence-transformers
pip install pgvector
pip install groq
pip install easyocr
pip install pillow
pip install numpy
pip install pandas
pip install scikit-learn
pip install openpyxl
```

---

# Environment Variables

Create a file named

```text
.env
```

Example

```env
FLASK_APP=run.py
FLASK_ENV=development

SECRET_KEY=your_secret_key

DATABASE_URL=postgresql://postgres:password@localhost:5432/hackathon

GROQ_API_KEY=your_groq_api_key
```

**Never commit `.env` to GitHub.**

---

# PostgreSQL Setup

Create a database

```text
hackathon
```

Enable pgvector

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

---

# Database Migration

Initialize (only once)

```bash
flask db init
```

Generate migration

```bash
flask db migrate -m "Initial migration"
```

Apply migration

```bash
flask db upgrade
```

---

# Run Server

```bash
python run.py
```

or

```bash
flask run
```

Server

```
http://127.0.0.1:5000
```

---



# Git Workflow

Pull latest changes

```bash
git pull origin main
```

Create a new feature branch

```bash
git checkout -b feature/backend-upload
```

Commit

```bash
git add .

git commit -m "Add upload API"
```

Push

```bash
git push origin feature/backend-upload
```

Create a Pull Request.

---

# Coding Guidelines

- Follow PEP 8.
- Use meaningful variable names.
- Keep business logic inside `services/`.
- Keep API endpoints inside `routes/`.
- Database models belong in `models/`.
- Never hardcode API keys or passwords.
- Add comments only where logic is non-obvious.

---

