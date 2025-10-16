# ReactChamp - Office Pool Web App

This is a Next.js web application for a scalable office pool for international football tournaments, built with a Firebase backend. The project is a learning exercise to build a high-quality web app using modern best practices.

## Core Principles

This project aims to adhere to the following principles and methodologies:

-   **SOLID Principles**: A set of five design principles intended to make software designs more understandable, flexible, and maintainable.
-   **Atomic Design**: A methodology for creating design systems, where UIs are broken down into their basic components and then assembled into larger, more complex structures.
-   **BEM (Block, Element, Modifier)**: A naming convention for CSS classes in order to keep CSS more maintainable and scalable.
-   **Scalable Architecture**: The folder structure and overall architecture are designed to be easy to understand and to scale as the project grows.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a feature-based folder structure that is designed for scalability and maintainability.

```
/src/
|-- app/
|   |-- (auth)/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- (main)/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- (marketing)/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- admin/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- user/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   `-- api/
|       `-- v1/
|           `-- [[...slug]]/
|               `-- route.ts
|-- components/
|   |-- atoms/
|   |   `-- index.ts
|   |-- molecules/
|   |   `-- index.ts
|   |-- organisms/
|   |   `-- index.ts
|   `-- templates/
|       `-- index.ts
|-- config/
|   `-- index.ts
|-- hooks/
|   `-- index.ts
|-- lib/
|   `-- firebase.ts
|-- services/
|   `-- index.ts
|-- styles/
|   `-- main.scss
|-- types/
|   `-- index.ts
`-- utils/
    `-- index.ts
```

### Explanation of Directories

-   **`src/app`**: This is the core of your application, using Next.js's App Router. The subdirectories are organized by application feature or domain.
    -   **Route Groups (`(auth)`, `(main)`, `(marketing)`)**: These folders group related pages without affecting the URL structure. This is great for organizing features like authentication, the main app, and marketing pages.
    -   **`admin` & `user`**: These are for role-specific sections of your application.
    -   **`api/v1/[[...slug]]`**: A versioned, catch-all API route. Starting with a versioned API is a best practice for scalability.

-   **`src/components` (Atomic Design)**: This directory is structured according to the Atomic Design methodology, which promotes creating a reusable UI component library.
    -   **`atoms`**: The smallest UI elements (e.g., `Button`, `Input`).
    -   **`molecules`**: Combinations of atoms (e.g., a search bar with an input and a button).
    -   **`organisms`**: More complex components made of molecules and atoms (e.g., a site header).
    -   **`templates`**: Page-level layouts.

-   **`src/lib`**: For initializing and configuring third-party libraries.
    -   **`firebase.ts`**: This is where you'll set up your Firebase connection. This isolates external services, aligning with the **Single Responsibility Principle (SRP)**.

-   **`src/styles`**: For global styles and design system files.
    -   **`main.scss`**: You can use this file to implement the **BEM (Block, Element, Modifier)** methodology for creating scalable and maintainable CSS.

-   **`src/hooks`**: For custom React hooks. Extracting component logic into hooks makes it reusable and testable, following the **Don't Repeat Yourself (DRY)** principle.

-   **`src/utils`**: For pure, reusable utility functions (e.g., date formatters, validation functions).

-   **`src/services`**: To abstract away data fetching and other external service interactions. This is a key part of applying the **Dependency Inversion Principle (DIP)**, as your components will depend on these service abstractions, not on concrete `fetch` calls.

-   **`src/config`**: For application-wide configuration and environment variables.

-   **`src/types`**: To store all your TypeScript types and interfaces, ensuring type safety and consistency across the app.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in the development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs ESLint to find and fix problems in your code.

## Learn More

To learn more about the technologies used in this project, see the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [React Documentation](https://reactjs.org/) - learn about React.
-   [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase.
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
-   [Atomic Design](https://atomicdesign.bradfrost.com/) - learn about the Atomic Design methodology.
-   [BEM 101](https://css-tricks.com/bem-101/) - learn about the BEM methodology.
