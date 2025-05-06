# Litorina Folkhögskola

We are rebuilding the Litorina School website using Strapi as a headless CMS for content management and React for the frontend. This modern stack allows for a flexible, maintainable, and performant web experience.

---

## 📖 What the Project Is

This project is a modern web application for Litorina Folkhögskola. It uses:
- **Strapi**: A headless CMS for managing content.
- **React**: A frontend library for building user interfaces.
- **Vite**: A fast build tool for the frontend.
- **TypeScript**: For type-safe development.

The backend provides a robust API for managing content, while the frontend delivers a responsive and interactive user experience.

---

## ⚙️ How to Set It Up

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm** or **yarn**
- **PostgreSQL** (if using a database other than SQLite)



### Clone the Repository

1. Open your terminal and navigate to the directory where you want to clone the project.
2. Run the following command to clone the repository:

```bash

git clone https://github.com/MaybeJod/litorina
```
3. Navigate into the project directory:

```bash

cd litorina
```

### Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file by copying .env.example:

```bash
cp .env.example .env
```

4. Update the .env file with your environment variables (ask in the group chat for .env)

5. Start the development server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🚀 How to Run

### Backend

. Development Mode: Run the following in the backend directory:

```bash
npm run develop 
```
. Production Mode: Build and start the backend:

```bash
npm run build
npm run start
```
### Frontend

. Development Mode: Run the following in the frontend directory:

```bash
npm run dev
```
. Production Mode: Build and preview the frontend:

```bash
npm run build
npm run preview
```
## 📚 Learn More

### Backend
- [Strapi Documentation](https://docs.strapi.io)
- [Strapi CLI Commands](https://docs.strapi.io/dev-docs/cli)

### Frontend
- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
