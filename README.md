# kunai-runner
High-performance Dataverse Playwright frontend testing framework and E2E automation scaffolding.

kunai-runner is the foundational open-source automation engine and testing scaffolding for IQSS Dataverse. Built for speed, reliability, and developer ergonomics, it provides the core test runner, DOM assertion utilities, and CI/CD integration pipelines needed to validate complex frontend architectures. Designed to be highly extensible, it serves as the close-quarters framework for writing, structuring, and executing robust end-to-end web UI tests.

## Steps to Use Kunai Runner
1. Clone the git repository into an empty folder
2. cd into the working directory, i.e., the root directory where playwright.config.js exists
3. cp .env.example .env
4. Fill .env with your installation specific details and login adapters
5. mkdir -p sensitive-data && touch my_folder/user.json
6. Fill user.json as follows according to your installation and login mechanism:
```json
{
  "username": "username",
  "password": "password",
  "full_name": "Full Name"
}
```
7. Run `npx playwright test`