# 🌐 Node HTTP Server Demo

Node HTTP Server Demo is a simple Node.js project that demonstrates
how to create an HTTP server and handle basic routes
without using frameworks like Express.

---

## Overview

Most developers start directly with frameworks.
This project shows what happens underneath.

It helps you understand:
- How Node.js handles HTTP requests
- How routing works at a basic level
- How API responses are sent

---

## Features

- Creates an HTTP server using Node.js core module
- Handles multiple routes
- Returns plain text and JSON responses
- Lightweight and beginner-friendly
- No external dependencies

---

## Routes

| Route | Response |
|------|----------|
| `/` | Hello World |
| `/api/courses` | `[1, 2, 3]` (JSON) |

---

## Usage

1. Make sure Node.js is installed
2. Run the server  
   ```bash
   node server.js
