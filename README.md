# Cypress Test Suite

![Cypress](https://img.shields.io/badge/Cypress-13.x-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Mochawesome](https://img.shields.io/badge/Reports-Mochawesome-6C63FF)
![License](https://img.shields.io/badge/license-ISC-blue)

> Automated end-to-end testing project focused on reliable UI validation, network interception, multi-tab navigation and test reporting.

## Overview

This project demonstrates practical automated testing against the **Loja EBAC** e-commerce application using Cypress. The suite explores real-world E2E techniques such as request interception, browser navigation between tabs and HTML/JSON test reporting.

## Tech Stack

- **Cypress 13.17** — end-to-end test automation
- **JavaScript** — test implementation
- **Mochawesome** — HTML/JSON test reports
- **Puppeteer** — browser automation support
- **Node.js / npm** — project runtime and dependency management

## What this project demonstrates

- End-to-end UI automation
- Network request interception
- Multi-tab / external navigation handling
- Reusable Cypress utilities
- Automated test execution from the command line
- Mochawesome reporting

## Project Structure

```text
.
├── cypress/
│   └── support/
│       └── utils/
│           └── tabNavigation.js
├── mochawesome-report/
├── cypress.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Getting Started

### Requirements

- Node.js
- npm
- Access to the Loja EBAC test environment

### Install dependencies

```bash
npm install
```

### Run the complete suite

```bash
npm test
```

### Reports

After execution, Mochawesome can be used to inspect the generated HTML/JSON results in `mochawesome-report/`.

## Engineering Focus

The repository is part of my QA Automation portfolio, with emphasis on maintainable test structure, realistic user flows, API-aware UI testing and actionable reporting.

## Author

**Pedro Ricardo**  
QA Automation | JavaScript | Cypress | API Testing | Mobile Testing

[![GitHub](https://img.shields.io/badge/GitHub-Pedro001979-181717?logo=github)](https://github.com/Pedro001979)

## License

ISC
