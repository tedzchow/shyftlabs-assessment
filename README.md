# Shyftlabs

This is a monorepo for the Shyftlabs application, which includes both the frontend (React) and backend (Express, MySQL, TypeORM) projects.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) (Make sure it's running)

Clone the repository:

```bash
git clone git@github.com:tedzchow/shyftlabs-assessment.git
cd shyftlabs-assessment
```

### Backend Setup

1. Navigate to the `backend` folder:

```bash
cd backend
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. Update the `.env` file with your MySQL credentials:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=<YOUR_MYSQL_USERNAME>
DB_PASSWORD=<YOUR_MYSQL_PASSWORD>
DB_DATABASE=<YOUR_MYSQL_DATABASE>
```

5. Start backend

```bash
yarn start
```

### Frontend Setup

1. Navigate to the `frontend` folder:

```bash
cd frontend
```

2. Install dependencies using Yarn:

```bash
yarn install
```

3. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. You can customize the frontend configuration in `.env`.

5. Start frontend

```bash
yarn start
```

## App urls

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

```
