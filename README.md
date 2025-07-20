# Aminul Islam - Product Designer Portfolio

This is the source code for the personal portfolio website of Aminul Islam, a product designer specializing in crafting intuitive and user-centric digital experiences. The site is built with Next.js and showcases case studies, blog posts, and information about the designer.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI:** [Firebase Genkit](https://firebase.google.com/docs/genkit)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_REPOSITORY_URL>
    cd <YOUR_REPOSITORY_DIRECTORY>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add any necessary environment variables (e.g., for Genkit/Google AI).
    ```sh
    cp .env .env.local
    # Add your GEMINI_API_KEY to .env.local
    ```

### Running the Development Server

You can start the development server with the following command:

```sh
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs the linter to check for code quality issues.
-   `npm run genkit:dev`: Starts the Genkit development server.
