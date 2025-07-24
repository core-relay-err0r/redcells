# RedCellAdvisory

This is a modern landing site for a fictional due-diligence intelligence agency, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS.
- **Responsive Design**: Fully responsive layout for all devices.
- **Dark "Intelligence" Theme**: Custom dark theme with neon accents.
- **Component-Based Architecture**: Reusable components for UI elements like navbars, footers, and pricing cards.
- **App Router**: Utilizes the latest Next.js App Router for file-based routing.
- **MDX Support**: Ready for blog posts and case studies written in Markdown (setup required).
- **Backend Stubs**: Includes placeholders for a payment webhook and an email sending utility.
- **SEO Optimized**: Includes a basic SEO setup with metadata for each page.
- **Form Handling**: Uses `react-hook-form` and `zod` for robust form validation.

## Getting Started

### Prerequisites

- Node.js (v18.17 or later)
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository:**
    \`\`\`bash
    git clone <repository-url>
    cd redcell-advisory
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    \`\`\`

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project by copying the example file:
    \`\`\`bash
    cp .env.example .env.local
    \`\`\`

    Fill in the required environment variables.

    `.env.example`:
    \`\`\`
    # For SendGrid email utility (optional for this demo)
    SENDGRID_API_KEY=
    SENDER_EMAIL=

    # For Stripe integration (placeholder)
    STRIPE_SECRET_KEY=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    \`\`\`

4.  **Run the development server:**
    \`\`\`bash
    npm run dev
    \`\`\`

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project uses the `src` directory and follows Next.js App Router conventions.

-   `src/app/`: Contains all routes, pages, and layouts.
    -   `api/`: API routes.
    -   `layout.tsx`: The root layout.
    -   `page.tsx`: The home page.
    -   `(pages)/`: Route groups for different pages of the site.
-   `src/components/`: Reusable React components.
    -   `ui/`: UI components like buttons, cards, etc. (shadcn/ui).
    -   `layout/`: Layout components like Navbar and Footer.
-   `src/lib/`: Utility functions and libraries.
    -   `utils.ts`: General utility functions (e.g., `cn` for Tailwind).
    -   `sendgrid.ts`: Placeholder for email sending logic.
-   `src/content/`: (To be created) For MDX-based content like blog posts and case studies.
-   `public/`: Static assets like images and fonts.

This project provides a solid foundation. To make it fully functional, you would need to implement the MDX loading logic for the blog/cases, integrate a real payment provider like Stripe, and connect the email utility to a service like SendGrid.

## Email Setup

The project includes a placeholder utility for sending emails via SendGrid (`src/lib/sendgrid.ts`). To make this functional, you need to provide API credentials in your `.env.local` file.

-   `SENDGRID_API_KEY`: Your API key from your SendGrid account. This is used to authenticate requests to the SendGrid API.
-   `SENDER_EMAIL`: The verified email address you want to send emails from (e.g., `noreply@yourdomain.com`).

Without these variables set, the email functionality will be simulated, and messages will be logged to the console instead of being sent.
