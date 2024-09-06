Here’s the final version of your README with the repository URL added:

---

# React + Vite + Redux + Mantine + Tailwind Project

This project is a React application powered by Vite, Redux Toolkit, Mantine UI components, and Tailwind CSS for rapid and modern UI development. Below is the tech stack, directory structure, and other essential details.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Installation](#installation)
5. [Available Scripts](#available-scripts)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

This project is built with modern web technologies to ensure fast development and responsive design. The application integrates Mantine for UI components, Tailwind CSS for utility-first styling, Redux Toolkit for state management, and React Router DOM for navigation.

---

## Tech Stack

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Mantine](https://mantine.dev/)**: A React component library for building modern and responsive UIs.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: A set of tools for efficient Redux development, including RTK Query for data fetching.
- **[React Router DOM](https://reactrouter.com/)**: Declarative routing for React applications.
- **[Redux Persist](https://github.com/rt2zz/redux-persist)**: A library to persist and rehydrate the Redux store.
- **[redux-persist-transform-encrypt](https://github.com/maxdeviant/redux-persist-transform-encrypt)**: Provides encryption for Redux-persisted data.
- **[Vite](https://vitejs.dev/)**: A fast build tool and development server for modern web projects.

### Plugins
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)**: Uses Babel for Fast Refresh during development.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses SWC for Fast Refresh, providing faster builds.

---

## Project Structure

The project follows a standard React + Redux architecture. Below is the folder structure:

```
├── node_modules/
├── public/
├── src/
│   ├── assets/               # Static assets like images
│   ├── hooks/                # Custom React hooks
│   ├── layout/               # Layout components
│   ├── pages/                # Page-specific components
│   ├── component/
│   │   ├── common/           # Common reusable components
│   │   ├── dashboards/       # Dashboard related components
│   ├── redux/                
│   │   ├── reducers/         # Redux reducers
│   │   └── store.jsx         # Redux store configuration
│   ├── routes/               # Route definitions and navigation logic
│   ├── service/              # External service integrations (API calls)
│   ├── theme/                # Theme configurations (e.g., Mantine)
│   ├── utils/                # Utility functions and helpers
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global CSS styles
│   ├── main.jsx              # React entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/mrvasani48/react-mantine-tailwind-redux.git
```

### Step 2: Navigate into the project folder

```bash
cd react-mantine-tailwind-redux
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000` by default.

---

## Available Scripts

### `npm run dev`
Runs the app in the development mode. Open `http://localhost:3000` to view it in the browser. Hot reloading is enabled.

### `npm run build`
Builds the app for production in the `dist` folder. It optimizes the build for best performance.

### `npm run preview`
Locally preview the production build.

---

## Contributing

Feel free to submit pull requests to contribute to this project. Please adhere to the [Code of Conduct](./CONTRIBUTING.md) and use ESLint for code formatting.

---

## License

This project is licensed under the MIT License.

---
