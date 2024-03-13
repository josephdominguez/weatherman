<p align="center">
  <img height="200" src="https://theweatherman.cc/assets/logo-3b7a1b16.svg">
</p>
<p align="center">
The WeatherStar4000 reimagined.
</p>

## Table of Contents

- [Weatherman](#weatherman)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements and Credits](#acknowledgement-and-credits)

## Description

[TheWeatherman](https://theweatherman.cc/) recreates the iconic interface of the Weather Channel's WeatherStar 4000 as a modern full stack web application. `weatherman` allows users to view real-time weather forecasts by their ZIP code. Users can view a complete forecast or navigate to individual parts of the forecast.

## Features

![Extended Forecast](./client/public/images/weatherman%20extended%20forecast.png)

- **Complete Forecasts**: Access detailed weather information given in the form of local, extended, and travel forecasts. Stay updated with current conditions in your area or
check latest obserations in cities across the USA.

- **Real-time Data**: Leveraging multiple weather data APIs, Weatherman provides 
up-to-the-minute weather information.

- **Music Player**: Enjoy an integrated music player that features a curated playlist of iconic new age and smooth jazz tracks from the original Weather Channel broadcasts.

- **Responsive Design**: Weatherman is designed to be fully responsive, ensuring a seamless 
experience across desktop and mobile.

- **Authentication**: Secure user authentication with Auth0 provides personalized settings such as 
preferred ZIP code or unit of measurement.

## Getting Started

You can visit https://theweatherman.cc/ for the live site of the production build.

To run the application locally, you can follow these steps:

### Installation

1. Clone the repository.
```bash
git clone https://github.com/josephdominguez/weatherman.git
```
The repository is a monorepo where the frontend is located in the `client` 
directory and the backend is located in the `server` directory.

2. Ensure you have Node.js and npm installed on your system. Install the
project dependencies for both the frontend and backend separately.

#### Frontend
```bash
cd client
npm install
```
#### Backend
```bash
cd server
npm install
```

## Usage

1. To run the application for development, you can use the following commands:

#### Frontend
```bash
cd client
npm run dev
```

#### Backend
```bash
cd server
npm run dev
```

2. To build the application for production, you can use the following commands:

#### Frontend
```bash
cd client
npm run build
```

#### Backend
```bash
cd server
npm run start
```

By default, the backend will run on http://localhost:8080/.

### Testing

To run unit tests for the backend, run the following command:

```bash
cd server
npm run test
```

## Technologies Used

- Frontend: React (HTML, CSS, JavaScript)
- Backend: Node.js, Express
- Database: MongoDB
- CI/CD: Jenkins, Docker, Nginx, DigitalOcean

## Contributing

Contributions to the `weatherman` project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgement and Credits

Thanks to [TWCJim on YouTube](https://www.youtube.com/@twcjim) and [unknowndye on Bandcamp](https://unknowndye.bandcamp.com/album/weatherscan-music) for compiling 
many of the songs played on the Weather Channel. 

Credit to Nick Smith and Charles Abel from https://twcclassics.com for providing high-quality recreations of the icons used
for the original WeatherStar4000 and the WeatherStar4000 font.