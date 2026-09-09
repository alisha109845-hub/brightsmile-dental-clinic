# BrightSmile Dental Clinic

BrightSmile is a responsive dental clinic website created as a portfolio project. It gives patients a clear way to explore dental services, meet the care team, read patient stories, and request an appointment.

## Highlights

- Clean, responsive design for desktop, tablet, and mobile
- Multi-page navigation with React Router
- Reusable components for services, doctors, testimonials, statistics, and calls to action
- Appointment request form and contact page
- Scroll reveal animations and scroll-to-top navigation
- Content-driven service, doctor, and testimonial sections

## Pages

- Home: clinic introduction, featured services, doctors, testimonials, FAQs, and transformations
- About: clinic story, values, and facilities
- Services: available dental treatments
- Doctors: dentist profiles and specialties
- Appointment: appointment request form
- Contact: clinic contact information

## Tech Stack

- React 19
- React Router 7
- Vite 8
- Tailwind CSS 4
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
npm run dev
```

The development server is usually available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
src/
├── assets/       # Local images and media
├── components/   # Reusable UI components
├── data/         # Services, doctors, and testimonials
├── pages/        # Route-level page components
├── App.jsx       # Application routes and layout
└── index.css     # Global styles
```

## Content Updates

Project content can be updated in the files inside `src/data/`. Page-specific sections are located in `src/pages/`, while shared interface elements are in `src/components/`.

## Deployment
https://brightsmile-dent.netlify.app/
