# Clariti Playwright Framework

This is a Playwright + TypeScript framework for the SauceDemo application

## Features
- Page Object Model
- Folder layout (`/pages`, `/tests`, `/test-data`)
- JSON-driven test data
- Environment-based credentials
- HTML report, screenshots, videos, traces on failure

## Scenarios Implemented
- Login test
- Add to Cart test
- Checkout flow test
- Product sorting test
- Logout test

## Setup
```bash
npm install
npm install playwright

cp .env.example .env   # configure env vars if needed

npm run test           # run all tests
npm run report         # open HTML report
