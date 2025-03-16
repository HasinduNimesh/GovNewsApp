# Government News App UI

## Overview
The Government News App UI is designed to provide citizens with a reliable source for official press releases and public notices. The application features a clean and straightforward user interface, ensuring easy navigation and access to important information.

## Project Structure
The project is organized into several directories and files, each serving a specific purpose:

- **assets/**: Contains all static assets including styles, scripts, icons, and mock data.
  - **css/**: Stylesheets for the application.
    - `main.css`: Main styles for layout, typography, and color schemes.
    - `components.css`: Styles for reusable components like buttons and cards.
    - `mobile.css`: Responsive styles for mobile devices.
  - **js/**: JavaScript files for functionality.
    - `app.js`: Intended for JavaScript functionality.
  - **icons/**: SVG icons used throughout the application.
    - `logo.svg`: Government logo.
    - `notification.svg`: Icon for notifications.
    - `download.svg`: Icon for download actions.
    - `user.svg`: Icon for user profile actions.
  - **mockdata/**: Contains mock data for testing.
    - `notices.js`: Mock data for notices.

- **pages/**: HTML files representing different screens of the application.
  - `splash.html`: Splash screen with government emblem and tagline.
  - `onboarding.html`: Onboarding tutorial for new users.
  - `login.html`: Login and registration forms.
  - `home.html`: Home feed displaying latest press releases and public notices.
  - `notice-detail.html`: Detailed view of a selected notice.
  - `acts-gazettes.html`: List of official documents available for download.
  - `profile.html`: User profile information and settings.
  - `admin.html`: Admin dashboard for managing notices.

- **components/**: Reusable HTML components.
  - `header.html`: Header component with navigation links.
  - `notice-card.html`: Structure of a notice card.
  - `alert-banner.html`: Alert banner for critical notifications.
  - `footer.html`: Footer component with links to policies.

- `index.html`: Main entry point of the application.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the application.
3. Ensure that all assets are correctly linked in the HTML files.

## Purpose
The Government News App UI aims to enhance communication between the government and citizens by providing a centralized platform for accessing official information. The app prioritizes clarity, accessibility, and user experience, making it easier for users to stay informed about important announcements and documents.