# Accident Blackspot Detection System - Frontend

## Overview
This is a React-based frontend application for the Accident Blackspot Detection System. It provides a user interface to visualize accident blackspots on a map and submit new accident data.

## Features
- Google Maps integration for visualizing accident blackspots
- User authentication system
- Form for adding new accident data
- Responsive navigation bar
- Mobile-friendly design

## Technology Stack
- React.js
- React Router for navigation
- Google Maps API for map visualization
- CSS for styling

## Project Structure
- **src/Components**: Contains reusable UI components
  - **Button.js**: Custom button component
  - **Navbar.js**: Navigation bar component
  - **Pages**: Main page components
    - **Home.js**: Homepage with Google Maps
    - **AddAccident.js**: Form for adding accident data
    - **LoginForm.js**: User authentication form
    - **mapComponents.jsx**: Google Maps integration

## Setup and Installation
1. Ensure you have Node.js and npm installed
2. Clone the repository
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development server
5. Open `http://localhost:3000` in your browser

## Google Maps Integration
The application uses the Google Maps JavaScript API for visualizing accident data. To use this feature:
1. Make sure you have a valid Google Maps API key
2. Replace the placeholder API key in the code with your own key:
   - In `Home.js`: Update the `googleMapURL` parameter
   - In `mapComponents.jsx`: Update the `googleMapURL` parameter

## Navigation
The application uses React Router for navigation between pages:
- `/`: Home page with the map view
- `/AddAccident`: Page for adding new accident data and user authentication

## Responsive Design
The application is responsive and adapts to different screen sizes:
- Desktop: Full navigation menu
- Mobile: Collapsible hamburger menu

## Authentication
The application includes a basic authentication system:
- Login form with email and password fields
- Currently set up with a mock admin user (admin@admin.com/admin123)
- Connect to the backend authentication endpoints for actual implementation

## Connecting to Backend
The frontend is designed to connect to the backend REST API:
- Backend URL is configured to `http://localhost:8080`
- Update API endpoints in the fetch calls to match your backend configuration
