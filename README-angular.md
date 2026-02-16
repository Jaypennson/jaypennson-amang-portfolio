# Jay Pennson Amang - Angular Portfolio

An Angular-based portfolio website showcasing Umbraco development work and experience.

## Features

- **Split-screen Layout**: Fixed sidebar navigation with scrollable content area
- **Dark Theme**: Modern dark color scheme with teal accents
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Project Showcase**: Featured projects on the home page with full archive page
- **Smooth Animations**: Hover effects and smooth scrolling for better UX

## Tech Stack

- **Angular 17**: Modern Angular with standalone components
- **TypeScript**: Type-safe development
- **CSS3**: Custom properties and modern CSS features
- **Google Fonts**: Inter font family

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── sidebar/          # Navigation sidebar component
│   ├── pages/
│   │   ├── home/             # Main portfolio page
│   │   └── archive/          # All projects archive
│   ├── models/
│   │   └── project.model.ts  # Project interface
│   ├── services/
│   │   └── project.service.ts # Project data service
│   ├── app.component.*       # Root component
│   ├── app.config.ts         # App configuration
│   └── app.routes.ts         # Routing configuration
├── assets/                   # Static assets
├── index.html               # Main HTML file
├── main.ts                  # Application entry point
└── styles.css               # Global styles
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## Design Inspiration

Design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com) with a focus on minimalism and clean typography.

## License

This project is licensed under the MIT License.
