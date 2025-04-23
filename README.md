# Tibecvp Translator

Tibecvp Translator is a Google Translate clone built with React, TypeScript, and Vite. It provides a modern and responsive interface for translating text.

## Features

- **React + TypeScript**: Built with React and TypeScript for type safety and modern development practices.
- **Vite**: Fast development server and build tool.
- **Responsive Design**: Optimized for various screen sizes.
- **ESLint Integration**: Ensures code quality and consistency.
- **Environment Configuration**: `.env` files for managing API keys and other environment variables.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd google-translate-clone/client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

### Building for Production

To build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Linting

Run ESLint to check for code quality:

```bash
npm run lint
```

## Project Structure

```
google-translate-clone/
├── client/
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── .env.example       # Example environment variables
│   ├── package.json       # Project dependencies and scripts
│   ├── vite.config.ts     # Vite configuration
│   └── ...                # Other configuration files
├── server/                # Backend server (if applicable)
└── README.md              # Project documentation
```

## Environment Variables

The project uses environment variables for configuration. Copy the `.env.example` file to `.env` and update the values as needed.

```bash
cp .env.example .env
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
