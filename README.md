# Nodelizr-API

A CLI and API tool to generate boilerplate Node.js projects with curated dependencies, bundled into a ZIP for quick start.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running Locally](#running-locally)
  - [API Endpoints](#api-endpoints)
  - [Example Requests](#example-requests)
- [Project Structure](#project-structure)
- [Available Libraries](#available-libraries)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Generate a fully scaffolded Node.js project with:
  - `package.json`, `src/index.js`, `README.md`, `.gitignore`
  - Custom metadata: name, version, description, author
  - Selectable libraries with latest versions
  - Downloadable ZIP package
- RESTful API built with Express and TypeScript
- Cached library listing for fast retrieval
- Extensible template for adding new files or custom templates

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn

### Installation

```bash
git clone https://github.com/Aethelon/Nodelizr-API.git
cd Nodelizr-API
npm install
```

_or with yarn:_

```bash
yarn install
```

## Usage

### Running Locally

```bash
npm run dev
```

API base URL: `http://localhost:3000/api`

### API Endpoints

1. **Generate Project ZIP**

   - **POST** `/api/generate`
   - **Headers**: `Content-Type: application/json`
   - **Body**:
     ```json
     {
       "author": "Your Name",
       "description": "My Node Project",
       "version": "1.0.0",
       "libraries": [
         { "name": "express", "version": "^4.18.2" },
         { "name": "cors", "version": "^2.8.5" }
       ]
     }
     ```
   - **Response**: ZIP file (`application/zip`)

2. **List Available Libraries**

   - **GET** `/api/libraries`
   - **Response**: JSON grouped by category

3. **Search npm Package**
   - **GET** `/api/libraries/search?name={packageName}`
   - **Response**: npm package details or error message

### Example Requests

```bash
# Generate project
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "author": "Bruno Lira & Paulo de Araujo",
    "description": "Meu Projeto Node",
    "version": "1.0.0",
    "libraries": [
      { "name": "express", "version": "^4.18.2" },
      { "name": "cors", "version": "^2.8.5" },
      { "name": "dotenv" }
    ]
  }' --output project.zip

# List libraries
curl http://localhost:3000/api/libraries

# Search package
curl http://localhost:3000/api/libraries/search?name=typescript
```

## Project Structure

```
Nodelizr-API/
├─ src/
│  ├─ api/
│  │  ├─ controller/        Express route handlers
│  │  ├─ data/              Templates & library list
│  │  ├─ dto/               Data transfer objects
│  │  └─ service/           Business logic
│  ├─ config/
│  │  ├─ app.ts             Express app setup
│  │  └─ server.ts          Server entry point
├─ shared/                 Shared utilities (zip, npm fetch)
├─ package.json
└─ README.md
```

## Available Libraries

View `/src/api/data/libraries.list.ts` for the full curated list.

## Contributing

Contributions are welcome:

1. Fork the repo
2. Create a branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m "feat: description"`
4. Push: `git push origin feature/YourFeature`
5. Open a Pull Request

## License

ISC License. See [LICENSE](LICENSE) for details.
