# Resume Website

This is the repository for my personal resume website built with TypeScript, React, Next.js, and Framer Motion. 
The website is live and can be accessed [here](https://willbarouch.com).
The development version of the website can be accessed [here](https://test.willbarouch.com).

## Built With

- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
- ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-000000?style=flat-square&logo=framer&logoColor=white)

## Getting Started

To get a local copy of this project, follow these steps:

1. Clone the repository: 
   ```bash
   git clone https://github.com/WillBarouch/WillBarouch.github.io.git
   ```
2. Install the dependencies:
   ```bash
   cd WillBarouch.github.io
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000` to see the website locally.

## Content (CMS)

The resume content (hero, Education, Skills, Debating, Experience, contact) is managed in
[Sanity](https://www.sanity.io/) rather than hardcoded. The home page fetches it at build/request
time and revalidates every 60 seconds, so content edits appear without a redeploy.

### First-time setup

1. Create a free project at [sanity.io/manage](https://www.sanity.io/manage) and note the
   **Project ID**. Create a dataset named `production` (the default).
2. Generate an API token with the **Editor** role (Manage → API → Tokens) for seeding.
3. Copy `.env.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_WRITE_TOKEN=your_write_token
   ```
4. Seed the initial content (mirrors what the site shipped with):
   ```bash
   npm run seed
   ```
5. Add `http://localhost:3000` and your production URL as **CORS origins** in
   Manage → API → CORS origins (so the embedded Studio can connect).

### Editing content

Run `npm run dev` and open [`/studio`](http://localhost:3000/studio) to edit content in the
browser. Cards in each section can be drag-reordered. Publish to make changes live.

### Deploying

Set the same `NEXT_PUBLIC_SANITY_*` environment variables in your hosting provider (e.g. Vercel).
The `SANITY_API_WRITE_TOKEN` is only needed locally for seeding, not in production.

## License

This project is licensed under the [GNU GPL v3.0]([https://opensource.org/licenses/MIT](https://spdx.org/licenses/GPL-3.0-or-later.html)). Feel free to use and modify the code as per your needs.
