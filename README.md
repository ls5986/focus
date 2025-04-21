# Focus - Modern E-Learning Platform

Focus is a sleek, minimalist e-learning platform inspired by Thinkific and MasterClass. Built with Next.js, TypeScript, and Tailwind CSS, it provides a modern learning experience with a black-and-white theme.

## Features

- 🎨 Modern, minimalist black-and-white design
- 📱 Fully responsive layout
- 🎥 High-quality video streaming support
- 👤 User authentication with email and social login
- 📚 Course management for instructors
- 📊 Progress tracking for learners
- 🌙 Dark mode by default

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Video Player**: React Player
- **UI Components**: Custom components with Tailwind CSS
- **Icons**: Heroicons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/focus.git
   cd focus
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database and authentication credentials.

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Visit `http://localhost:3000` to see the application.

## Project Structure

```
focus/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── courses/        # Course-related components
│   │   ├── layout/         # Layout components
│   │   ├── providers/      # Context providers
│   │   └── ui/             # Reusable UI components
│   └── lib/                # Utility functions and configurations
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
└── ...config files
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma database GUI

### Adding a New Feature

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by Thinkific and MasterClass
- Icons from Heroicons
- UI components styled with Tailwind CSS 