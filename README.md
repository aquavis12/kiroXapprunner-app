# Portfolio Website

A modern, responsive portfolio website built with React featuring a clean design and smooth user experience.

## Features

- Built with React 18.2.0
- Modern JavaScript (ES6+)
- Component-based architecture
- Fully responsive design with mobile-first approach
- Gradient hero section with smooth animations
- Interactive project cards with hover effects
- Professional styling with CSS Grid and Flexbox
- Fast development with Create React App
- AWS App Runner deployment ready

## Components

- **Header**: Navigation bar and hero section with gradient background and call-to-action
- **About**: Personal information, bio, and skills showcase with styled skill tags
- **Projects**: Interactive project portfolio with cards displaying tech stack
- **Contact**: Professional contact information with social links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

### AWS App Runner Deployment

This project includes an `apprunner.yaml` configuration file for seamless deployment to AWS App Runner:

```bash
# The deployment will automatically:
# 1. Install dependencies with npm ci
# 2. Build the React application
# 3. Serve the built files on port 8080 using npx serve
```

To deploy to AWS App Runner:
1. Push your code to a connected repository (GitHub, etc.)
2. Create an App Runner service pointing to your repository
3. App Runner will automatically detect and use the `apprunner.yaml` configuration

### Testing

Run the test suite:
```bash
npm test
```

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation and hero section with gradient background
│   │   ├── About.js        # About section with skills and bio
│   │   ├── Projects.js     # Project showcase with interactive cards
│   │   └── Contact.js      # Contact information and social links
│   ├── App.js              # Main application component
│   ├── App.css             # Complete styling for all components
│   ├── index.css           # Global styles and CSS reset
│   └── index.js            # Application entry point
├── apprunner.yaml          # AWS App Runner deployment configuration
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## Styling

The project uses modern CSS with:
- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS custom properties for consistent theming
- Smooth transitions and hover effects
- Mobile-first responsive design
- Professional color scheme with gradient backgrounds

## Customization

To customize the portfolio:
1. Update personal information in `src/components/Header.js`
2. Modify the about section and skills in `src/components/About.js`
3. Add your projects to the projects array in `src/components/Projects.js`
4. Update contact information in `src/components/Contact.js`
5. Adjust colors and styling in `src/App.css`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment

### AWS App Runner

The project includes `apprunner.yaml` for automatic deployment to AWS App Runner. The configuration:
- Uses Node.js 18 runtime
- Installs dependencies with `npm ci` for faster, reliable builds
- Builds the React app for production
- Serves the static files on port 8080 using `npx serve`
- Sets production environment variables

### Local Development

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Browser Support

- Production: Modern browsers with >0.2% usage
- Development: Latest Chrome, Firefox, and Safari

## License

Private project - not for public distribution.