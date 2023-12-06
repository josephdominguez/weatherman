# weatherman

The Weather Channel's classic interface reimagined.

## Table of Contents

- [weatherman](#weatherman)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Description

This project captures the nostalgic design interface of the WeatherScan 4000 and transforms that to a React web application. `weatherman` allows users to view forecasts by their location, inputting a desired ZIP code, navigating to an individual forecast, or viewing a complete forecast. Users can make an account and change their unit preferences from imperial (default) to metric. All of these features have been added in order to streamline the experience of viewing a weather forecast in an easy-to-read TWC format.

## Features

- Local, travel, and extended forecasts.

- Current conditions in your area.

- Latest observations of cities around North America.

- Access to 33 hypnotic tracks.

![Extended Forecast](./client/public/images/weatherman%20extended%20forecast.png)

## Getting Started

Install project locally, then install requisite dependencies for server and client by running `npm i`. Host locally by running `npm run start` in server. Initialize client by running `npm run dev` in client.

### Prerequisites

Dependencies that are required to run the project:
- Node.js
- Mongo DB
- A computer :)

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/josephdominguez/weatherman.git