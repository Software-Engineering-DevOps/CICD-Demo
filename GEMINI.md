# Project Overview

This is a simple Node.js project that demonstrates a CI/CD pipeline. It uses an Express.js server to serve a static HTML page and a simple API endpoint. The project is configured to use GitHub Actions for continuous integration and deployment to Render.

## Building and Running

### Prerequisites

*   Node.js
*   npm

### Installation

To install the dependencies, run the following command:

```bash
npm install
```

### Running the Application

To run the application locally, use the following command:

```bash
npm start
```

This will start the server on `http://localhost:3000`.

### Testing

To run the tests, use the following command:

```bash
npm test
```

## Development Conventions

### Formatting

This project uses Prettier for code formatting. To format the code, run:

```bash
npm run format
```

### Testing

The project uses Jest and Supertest for testing. Tests are located in the `tests` directory.

### CI/CD

The project is configured to use GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/main.yml`. The workflow runs the tests, waits for QA approval, and then deploys the application to Render.
