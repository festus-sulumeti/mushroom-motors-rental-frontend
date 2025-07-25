# Mushroom Motors Rental Frontend

Mushroom Motors Rental Frontend is a modern web application designed to streamline the process of vehicle rental for both customers and administrators. Built with React and Vite, it delivers a fast, intuitive, and responsive user experience, enabling users to easily browse, book, and manage vehicle rentals online.

## Overview

This application serves as the customer-facing portal for Mushroom Motors, a vehicle rental service. Users can explore a catalog of available vehicles, view detailed specifications, and make bookings with real-time availability. The platform also provides authenticated users with booking management features and equips administrators with tools to oversee inventory and reservations.

## Key Features

- **Vehicle Catalog:** Browse a diverse selection of vehicles with advanced filtering and search capabilities.
- **Detailed Listings:** Access comprehensive information for each vehicle, including images, specifications, and pricing.
- **Online Booking:** Reserve vehicles for specific dates, with secure authentication and real-time availability checks.
- **Booking Management:** View, modify, or cancel existing reservations through a personalized dashboard.
- **Admin Tools:** Manage vehicle inventory, review bookings, and perform administrative tasks via a dedicated interface.
- **Responsive Design:** Optimized for seamless use on desktops, tablets, and mobile devices.
- **Performance & Reliability:** Built with Vite for rapid development and optimized production builds.

## Technology Stack

- **Frontend:** React, Vite, React Router
- **API Communication:** Axios
- **Styling:** Tailwind CSS
- **Quality Assurance:** ESLint
- **Optional:** TypeScript for type safety

## Getting Started

- **Clone the repository:**  
  `https://github.com/festus-sulumeti/mushroom-motors-rental-frontend.git`
- **Install dependencies:**  
  `npm install` or `yarn install`
- **Start development server:**  
  `npm run dev` or `yarn dev`
- **Build for production:**  
  `npm run build` or `yarn build`
- **Lint the codebase:**  
  `npm run lint` or `yarn lint`

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages (Home, Vehicle, Booking, Admin, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API integration and business logic
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point
│   └── ...                # Other source files
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Configuration

Create a `.env` file in the project root to specify environment variables such as API endpoints:
```
VITE_API_URL=https://api.mushroommotors.com
```

## Contributing

We welcome contributions from the community! Please fork the repository, create a feature branch, and submit a pull request for review.

## License

This project is licensed under the MIT License.

## Contact & Support

For questions, feedback, or support, please contact [your-email@example.com](mailto:your-email@example.com).

---

Empowering seamless vehicle rentals with Mushroom Motors.
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components (Home, Vehicle, Booking, Admin, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API calls and business logic
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── ...                # Other source files
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory for API endpoints and secrets:
```
VITE_API_URL=https://api.mushroommotors.com
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact [your-email@example.com](mailto:your-email@example.com).

---

Happy renting with Mushroom Motors!
