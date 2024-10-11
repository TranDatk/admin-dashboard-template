# Admin Dashboard Template

This is the **Admin Dashboard** for managing system. Built with modern web technologies, it provides a user-friendly interface for tracking and controlling various browser instances.

## Features

- **React 18**: Leverages the latest version of React for building dynamic user interfaces.
- **Ant Design**: UI components from Ant Design for building elegant and responsive layouts.
- **Redux Toolkit**: For efficient state management across the application.
- **Chart.js**: Data visualization using charts.
- **Axios**: Handle HTTP requests easily.
- **React Router**: Enables seamless navigation within the app.
- **Day.js**: Lightweight library for handling date manipulation.
- **Toastify**: User-friendly notification system.

## Tech Stack

- **Frontend**: React 18, Ant Design, Redux Toolkit
- **State Management**: Redux Toolkit
- **UI Components**: Ant Design, TailwindCSS for custom styling
- **Charts**: Chart.js with React bindings (react-chartjs-2)
- **Routing**: React Router Dom
- **HTTP Client**: Axios
- **Utilities**: Day.js for date manipulation, React Toastify for notifications

## Project Structure

```bash
├── public/                     # Static assets
├── src/                        # Source files
│   ├── assets/                 # Images, icons, etc.
│   ├── components/             # Reusable components
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Page components
│   ├── redux/                  # Redux slices and store setup
│   ├── routes/                 # Application routing
│   ├── styles/                 # Global and component-specific styles
│   └── utils/                  # Utility functions
├── .eslintrc.js                # ESLint configuration
├── tailwind.config.js          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
