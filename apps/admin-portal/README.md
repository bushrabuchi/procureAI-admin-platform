# AdminPortal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.2.

# ProcureAI — Angular frontend demonstration

ProcureAI demonstrates a procurement administration interface
with supplier management, purchase orders, approval interactions,
sample dashboard charts and theme switching.

## Scope

This application uses sample data and browser storage.

Demo entry and route guards simulate session navigation.
They do not provide backend authentication or authorization.

There is no live AI service or synchronized workflow with
the separate supplier portal.

Dashboard metrics are independent sample figures.

## Technical choices

- Standalone Angular components
- Lazy-loaded feature routes
- Angular Material controls and menus
- Reactive forms in existing feature forms
- Signals and computed state
- Service-based supplier and purchase-order state
- Browser persistence for sample business data
- Vitest interaction and workflow tests

## Storage behavior

- Suppliers and orders use localStorage.
- Demo entry uses sessionStorage.
- Sign-out removes only the demo session.
- Sample notifications reset when the workspace reloads.
- Theme applies throughout the current application visit.

## Validation

The prepared update passed 28 tests across 12 files.

The production build passed with an initial bundle warning:
520.91 kB against a 500 kB target.

Manual browser, accessibility and deployment checks must be
recorded separately.

## Run locally

From apps/admin-portal:

```bash
npm ci
npm start
```

Open http://localhost:4200 and select Enter demo.

## Test

```bash
npm test -- --watch=false
```

## Build

```bash
npm run build
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
