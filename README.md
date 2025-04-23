# Tibecvp Translator

Tibecvp Translator is a Google Translate clone built with React, TypeScript, and Vite. It provides a modern and responsive interface for translating text.

## Features

- **React + TypeScript**: Built with React and TypeScript for type safety and modern development practices.
- **Vite**: Fast development server and build tool.
- **Responsive Design**: Optimized for various screen sizes.
- **ESLint Integration**: Ensures code quality and consistency.
- **Environment Configuration**: `.env` files for managing API keys and other environment variables.
- **Backend Integration**: A Node.js/Express backend for handling API requests.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd google-translate-clone
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

### Running the Development Server

Start both the frontend and backend development servers:

1. Start the backend server:

   ```bash
   cd server
   npm run dev
   ```

   The backend server will run on `http://localhost:5000` (or as configured in the `.env` file).

2. Start the frontend server:

   ```bash
   cd client
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the project for production:

1. Build the frontend:

   ```bash
   cd client
   npm run build
   ```

   The production-ready files will be in the `dist` directory.

2. Deploy the backend as needed (e.g., to a cloud provider or hosting service).

### Linting

Run ESLint to check for code quality:

```bash
# Frontend
cd client
npm run lint

# Backend
cd ../server
npm run lint
```

## Project Structure

```
google-translate-clone/
├── client/
│   ├── src/               # Frontend source code
│   ├── public/            # Static assets
│   ├── .env.example       # Example environment variables for the frontend
│   ├── package.json       # Frontend dependencies and scripts
│   ├── vite.config.ts     # Vite configuration
│   └── ...                # Other frontend configuration files
├── server/
│   ├── src/               # Backend source code
│   ├── .env.example       # Example environment variables for the backend
│   ├── package.json       # Backend dependencies and scripts
│   ├── server.js          # Entry point for the backend
│   └── ...                # Other backend configuration files
└── README.md              # Project documentation
```

## Environment Variables

The project uses `.env` files for configuration. Both the frontend and backend have their own `.env.example` files.

### Frontend `.env.example`

```env
VITE_API_URL=http://localhost:5000
```

Copy this file to `.env` in the `client` directory and update the values as needed:

```bash
cp client/.env.example client/.env
```

### Backend `.env.example`

```env
PORT=5000
API_KEY=<your-api-key>
```

Copy this file to `.env` in the `server` directory and update the values as needed:

```bash
cp server/.env.example server/.env
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
