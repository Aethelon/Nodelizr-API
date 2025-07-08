import { Library } from "../dto/generate.dto.js";

export const LIBRARIES: Omit<Library, "version">[] = [
  {
    name: "@angular/cli",
    description: "TypeScript-based front-end framework for building web apps",
    category: "Frontend Frameworks",
  },
  {
    name: "react",
    description: "A declarative, component-based library for building UIs",
    category: "Frontend Frameworks",
  },
  {
    name: "vue",
    description: "Progressive framework for building user interfaces",
    category: "Frontend Frameworks",
  },
  {
    name: "svelte",
    description: "Cybernetically enhanced web apps",
    category: "Frontend Frameworks",
  },
  {
    name: "next",
    description: "Framework for server-rendered React apps",
    category: "Web Frameworks",
  },
  {
    name: "nuxt",
    description: "Framework for server-rendered Vue.js apps",
    category: "Web Frameworks",
  },
  {
    name: "express",
    description: "Fast, unopinionated, minimalist web framework",
    category: "Web Frameworks",
  },
  {
    name: "koa",
    description: "Next generation web framework for Node.js",
    category: "Web Frameworks",
  },
  {
    name: "fastify",
    description: "Fast and low overhead web framework",
    category: "Web Frameworks",
  },
  {
    name: "@nestjs/core",
    description:
      "A progressive Node.js framework for building efficient, reliable and scalable server-side applications",
    category: "Web Frameworks",
  },
  {
    name: "sails",
    description: "Realtime MVC framework for Node.js",
    category: "Web Frameworks",
  },
  {
    name: "hapi",
    description: "Framework for building applications and services",
    category: "Web Frameworks",
  },
  {
    name: "loopback",
    description:
      "Powerful framework for creating REST APIs and connecting to backend data sources",
    category: "Web Frameworks",
  },
  {
    name: "@adonisjs/core",
    description: "TypeScript-first MVC framework for server-side applications",
    category: "Web Frameworks",
  },
  {
    name: "feathers",
    description: "Microservice and real-time API framework",
    category: "Web Frameworks",
  },
  {
    name: "moleculer",
    description: "Fast & powerful microservices framework",
    category: "Web Frameworks",
  },
  {
    name: "meteor",
    description:
      "An ultra-simple, database‑everywhere, full-stack JavaScript platform",
    category: "Web Frameworks",
  },
  {
    name: "restify",
    description: "Build correct REST web services",
    category: "Web Frameworks",
  },
  {
    name: "micro",
    description: "Minimalistic microservice framework",
    category: "Web Frameworks",
  },
  {
    name: "actionhero",
    description: "Framework for reusable & scalable APIs and servers",
    category: "Web Frameworks",
  },
  {
    name: "cors",
    description: "CORS middleware for Express",
    category: "Common Middlewares",
  },
  {
    name: "helmet",
    description: "Helps secure Express apps by setting various HTTP headers",
    category: "Common Middlewares",
  },
  {
    name: "morgan",
    description: "HTTP request logger middleware for Node.js",
    category: "Common Middlewares",
  },
  {
    name: "compression",
    description: "Node.js compression middleware (gzip)",
    category: "Common Middlewares",
  },
  {
    name: "cookie-parser",
    description: "Parse Cookie header and populate req.cookies",
    category: "Common Middlewares",
  },
  {
    name: "body-parser",
    description: "Node.js body parsing middleware",
    category: "Common Middlewares",
  },
  {
    name: "express-async-errors",
    description:
      "Seamlessly handles errors in async Express routes without the need for try/catch.",
    category: "Common Middlewares",
  },
  {
    name: "http-errors",
    description:
      "Creates HTTP errors and provides standard error output for Express apps.",
    category: "Common Middlewares",
  },
  {
    name: "mongoose",
    description: "MongoDB object modeling for Node.js",
    category: "Databases & ORMs",
  },
  {
    name: "sequelize",
    description:
      "Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server",
    category: "Databases & ORMs",
  },
  {
    name: "typeorm",
    description: "ORM for TypeScript and JavaScript (ES5, ES6, ES7, ES8)",
    category: "Databases & ORMs",
  },
  {
    name: "prisma",
    description: "Next-generation Node.js and TypeScript ORM",
    category: "Databases & ORMs",
  },
  {
    name: "pg",
    description: "Non-blocking PostgreSQL client for Node.js",
    category: "Databases & ORMs",
  },
  {
    name: "mysql2",
    description: "Fast MySQL for Node.js",
    category: "Databases & ORMs",
  },
  {
    name: "redis",
    description: "Redis client for Node.js",
    category: "Databases & ORMs",
  },
  {
    name: "knex",
    description:
      "SQL query builder for Postgres, MySQL, SQLite3, Oracle, and MS SQL",
    category: "Databases & ORMs",
  },
  {
    name: "mongodb",
    description: "The official MongoDB driver for Node.js",
    category: "Databases & ORMs",
  },
  {
    name: "ioredis",
    description: "A robust, performance-focused and full-featured Redis client",
    category: "Databases & ORMs",
  },
  {
    name: "objection",
    description: "An SQL-friendly ORM for Node.js, built on top of Knex",
    category: "Databases & ORMs",
  },
  {
    name: "passport",
    description: "Simple, unobtrusive authentication for Node.js",
    category: "Authentication & Authorization",
  },
  {
    name: "jsonwebtoken",
    description: "JSON Web Token implementation for Node.js",
    category: "Authentication & Authorization",
  },
  {
    name: "bcrypt",
    description: "Optimized bcrypt in JavaScript",
    category: "Authentication & Authorization",
  },
  {
    name: "oauth2orize",
    description: "OAuth 2.0 authorization server toolkit",
    category: "Authentication & Authorization",
  },
  {
    name: "argon2",
    description: "Node.js bindings for Argon2 hashing algorithm",
    category: "Authentication & Authorization",
  },
  {
    name: "speakeasy",
    description:
      "Two-factor authentication for Node.js. One-time passcode generator",
    category: "Authentication & Authorization",
  },

  {
    name: "joi",
    description:
      "Schema description language and validator for JavaScript objects",
    category: "Validation",
  },
  {
    name: "class-validator",
    description: "Decorator-based object validation for TypeScript/JavaScript",
    category: "Validation",
  },
  {
    name: "express-validator",
    description: "Express.js middleware for validator.js",
    category: "Validation",
  },
  {
    name: "yup",
    description: "Dead simple object schema validation",
    category: "Validation",
  },
  {
    name: "dotenv",
    description: "Loads environment variables from .env file",
    category: "Environment & Config",
  },
  {
    name: "config",
    description: "Node.js application configuration",
    category: "Environment & Config",
  },
  {
    name: "nconf",
    description: "Hierarchical node.js configuration",
    category: "Environment & Config",
  },
  {
    name: "dotenv-flow",
    description: "Loads .env files in a flow (base, env-specific, local)",
    category: "Environment & Config",
  },
  {
    name: "cross-env",
    description:
      "Run scripts that set and use environment variables across platforms",
    category: "Environment & Config",
  },
  {
    name: "dotenv-expand",
    description: "Expand environment variables in .env files",
    category: "Environment & Config",
  },

  {
    name: "winston",
    description: "A multi-transport asynchronous logging library for Node.js",
    category: "Logging",
  },
  {
    name: "pino",
    description: "Extremely fast Node.js logger",
    category: "Logging",
  },
  {
    name: "bunyan",
    description: "A simple and fast JSON logging library",
    category: "Logging",
  },

  {
    name: "uuid",
    description: "For the creation of RFC4122 UUIDs",
    category: "Utilities & DevTools",
  },
  {
    name: "axios",
    description: "Promise based HTTP client for the browser and node.js",
    category: "Utilities & DevTools",
  },
  {
    name: "node-fetch",
    description: "A light-weight module that brings window.fetch to Node.js",
    category: "Utilities & DevTools",
  },
  {
    name: "nodemon",
    description:
      "Monitors for any changes in your Node.js application and automatically restarts the server",
    category: "Utilities & DevTools",
  },
  {
    name: "ts-node",
    description:
      "TypeScript execution and REPL for Node.js, with source map support",
    category: "Utilities & DevTools",
  },
  {
    name: "lodash",
    description: "Utility library delivering modularity, performance & extras",
    category: "Utilities & DevTools",
  },
  {
    name: "chalk",
    description: "Terminal string styling done right",
    category: "Utilities & DevTools",
  },
  {
    name: "debug",
    description: "Small debugging utility for Node.js & browsers",
    category: "Utilities & DevTools",
  },
  {
    name: "commander",
    description: "The complete solution for node.js command-line interfaces",
    category: "Utilities & DevTools",
  },
  {
    name: "yargs",
    description: "Command-line parser for Node.js",
    category: "Utilities & DevTools",
  },
  {
    name: "inquirer",
    description:
      "A collection of common interactive command-line user interfaces",
    category: "Utilities & DevTools",
  },
  {
    name: "uuidv4",
    description: "Generate UUID v4 (random)",
    category: "Utilities & DevTools",
  },
  {
    name: "deepmerge",
    description: "A library for deep (recursive) merging of JavaScript objects",
    category: "Utilities & DevTools",
  },

  {
    name: "jest",
    description: "Delightful JavaScript testing framework",
    category: "Testing",
  },
  {
    name: "mocha",
    description: "Simple, flexible, fun JavaScript test framework for Node.js",
    category: "Testing",
  },
  {
    name: "chai",
    description: "BDD / TDD assertion library for Node.js",
    category: "Testing",
  },
  {
    name: "supertest",
    description: "HTTP assertions for testing REST APIs",
    category: "Testing",
  },
  {
    name: "sinon",
    description: "Test spies, stubs and mocks for JavaScript",
    category: "Testing",
  },
  {
    name: "cypress",
    description:
      "Fast, easy and reliable testing for anything that runs in a browser.",
    category: "Testing",
  },
  {
    name: "puppeteer",
    description:
      "A Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol",
    category: "Testing",
  },
  {
    name: "webpack",
    description: "Module bundler for modern JavaScript applications",
    category: "Bundling & Transpilation",
  },
  {
    name: "esbuild",
    description: "An extremely fast JavaScript bundler",
    category: "Bundling & Transpilation",
  },
  {
    name: "tsup",
    description: "Bundle your TypeScript library with no config",
    category: "Bundling & Transpilation",
  },
  {
    name: "babel",
    description: "The compiler for next generation JavaScript",
    category: "Bundling & Transpilation",
  },
  {
    name: "rollup",
    description: "A module bundler for JavaScript",
    category: "Bundling & Transpilation",
  },
  {
    name: "socket.io",
    description: "Enables real-time bidirectional event-based communication",
    category: "Real-time & WebSockets",
  },
  {
    name: "ws",
    description:
      "Simple to use, blazing fast, and thoroughly tested WebSocket client and server",
    category: "Real-time & WebSockets",
  },
  {
    name: "multer",
    description:
      "Middleware for handling multipart/form-data, primarily used for uploading files",
    category: "File Handling",
  },
  {
    name: "formidable",
    description:
      "Node.js module for parsing form data, especially file uploads",
    category: "File Handling",
  },
  {
    name: "fs-extra",
    description:
      "Adds promise support and extra methods to the native fs module",
    category: "File Handling",
  },
  {
    name: "csv-parse",
    description: "CSV parsing with a streaming API",
    category: "File Handling",
  },
  {
    name: "exceljs",
    description: "Read, write and edit xlsx and csv files",
    category: "File Handling",
  },
  {
    name: "busboy",
    description: "A streaming parser for HTML form data for node.js",
    category: "File Handling",
  },
  {
    name: "archiver",
    description: "A streaming interface for archive generation",
    category: "File Handling",
  },
  {
    name: "nodemailer",
    description: "Easy as cake email sending from Node.js",
    category: "Email & Messaging",
  },
  {
    name: "amqplib",
    description: "AMQP 0-9-1 library for Node.js",
    category: "Email & Messaging",
  },
  {
    name: "kafka-node",
    description: "Node.js client for Apache Kafka",
    category: "Email & Messaging",
  },

  {
    name: "date-fns",
    description: "Modern JavaScript date utility library",
    category: "Date & Time",
  },
  {
    name: "moment",
    description: "Parse, validate, manipulate, and display dates",
    category: "Date & Time",
  },
  {
    name: "luxon",
    description:
      "A powerful, modern, and friendly wrapper for JavaScript dates and times",
    category: "Date & Time",
  },
  {
    name: "dayjs",
    description: "2KB immutable date library alternative to Moment.js",
    category: "Date & Time",
  },
  {
    name: "pretty-ms",
    description: "Convert milliseconds to a human readable string",
    category: "Date & Time",
  },
  {
    name: "sharp",
    description: "High-performance image processing",
    category: "Image & Media Processing",
  },
  {
    name: "jimp",
    description: "An image processing library written entirely in JavaScript",
    category: "Image & Media Processing",
  },
  {
    name: "ffmpeg-static",
    description: "FFmpeg static binaries for Node.js",
    category: "Image & Media Processing",
  },
  {
    name: "eslint",
    description: "Pluggable JavaScript linter",
    category: "Code Quality & Linting",
  },
  {
    name: "prettier",
    description: "An opinionated code formatter",
    category: "Code Quality & Linting",
  },
  {
    name: "tslint",
    description:
      "An extensible linter for the TypeScript language (deprecated, consider ESLint)",
    category: "Code Quality & Linting",
  },
  {
    name: "lint-staged",
    description: "Run linters on git staged files",
    category: "Code Quality & Linting",
  },
  {
    name: "husky",
    description: "Git hooks made easy",
    category: "Code Quality & Linting",
  },
  {
    name: "bull",
    description: "Persistent job queue based on Redis",
    category: "Job Queues & Scheduling",
  },
  {
    name: "agenda",
    description: "Lightweight job scheduling for Node.js",
    category: "Job Queues & Scheduling",
  },
  {
    name: "node-schedule",
    description: "A cron-like and not-cron-like job scheduler for Node",
    category: "Job Queues & Scheduling",
  },
  {
    name: "bree",
    description:
      "The best job scheduler for Node.js and JavaScript with cron, dates, and human-friendly strings",
    category: "Job Queues & Scheduling",
  },
  {
    name: "swagger-ui-express",
    description: "Serves Swagger UI Express from an Express app",
    category: "API Documentation",
  },
  {
    name: "apidoc",
    description: "Generate API documentation from source code comments",
    category: "API Documentation",
  },
  {
    name: "swagger-jsdoc",
    description: "Generates swagger definition based on JSDoc comments",
    category: "API Documentation",
  },
  {
    name: "redoc",
    description: "OpenAPI/Swagger-generated API Reference Documentation",
    category: "API Documentation",
  },
  {
    name: "cheerio",
    description:
      "Fast, flexible, and lean implementation of core jQuery for the server",
    category: "Web Scraping",
  },
  {
    name: "axios-retry",
    description: "A plugin that makes axios retry requests automatically",
    category: "Networking & HTTP",
  },
  {
    name: "got",
    description: "Human-friendly and powerful HTTP request library",
    category: "Networking & HTTP",
  },
  {
    name: "http-proxy-middleware",
    description:
      "Node.js proxying made simple. Configure proxy middleware with ease",
    category: "Networking & HTTP",
  },
  {
    name: "form-data",
    description: "A module to create readable `multipart/form-data` streams",
    category: "Networking & HTTP",
  },
  {
    name: "undici",
    description: "The HTTP/1.1 client, written from scratch for Node.js",
    category: "Networking & HTTP",
  },
  {
    name: "xml2js",
    description: "Simple XML to JavaScript object converter",
    category: "Data Parsing",
  },
  {
    name: "rate-limiter-flexible",
    description: "Flexible and robust rate limiter for Node.js",
    category: "Security & Rate Limiting",
  },
  {
    name: "express-rate-limit",
    description: "Basic IP rate-limiting middleware for Express",
    category: "Security & Rate Limiting",
  },
  {
    name: "pdfkit",
    description: "A JavaScript PDF generation library for Node and the browser",
    category: "Document Generation",
  },
  {
    name: "html-pdf",
    description: "HTML to PDF converter using PhantomJS",
    category: "Document Generation",
  },
  {
    name: "cls-hooked",
    description: "Continuation Local Storage for Node.js",
    category: "Async Context & State",
  },
  {
    name: "async-hooks",
    description: "API for tracking async resources in Node.js",
    category: "Async Context & State",
  },
  {
    name: "@opentelemetry/api",
    description: "OpenTelemetry API for tracing and metrics",
    category: "Monitoring & Tracing",
  },
  {
    name: "prom-client",
    description: "Prometheus client for Node.js",
    category: "Monitoring & Tracing",
  },
  {
    name: "newrelic",
    description: "New Relic Node.js Agent",
    category: "Monitoring & Tracing",
  },
];
