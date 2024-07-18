## Project Overview

The NY Times Most Popular Articles Viewer is a web application built using React that interacts with the NY Times Most Popular Articles API. It fetches and displays a list of articles based on the most viewed section, allowing users to view detailed information about each article when clicked.

## Features
`Fetch Articles`: Utilizes the NY Times Most Popular Articles API to fetch data based on a specified period (1, 7, or 30 days).\
`Display List`: Shows a list of articles with basic information such as title, author, and publication date.\
`View Details`: Clicking on an article in the list displays detailed information including the full article content.\
`Responsive Design`: Ensures the application is usable across different screen sizes.

## Main Components
`ArticleList`: Component to fetch data from API & manage application state & UI.
`ArticleItem`: Component to render each article.
`ArticleDetail`: Component to render detail of article.
`Skeleton`: Reusable component to show skeleton loader.
`RadioButtonPills`: Wrapper component on radio button group to show each radio item as pill.
 
## Project Structure
    * src/: Contains all source code files.\
        - components/: React components organized based on functionality.\
        - services/: Handles API calls and data fetching logic.\
        - hooks/: Custom hooks created to manage common logic in application.\
        - interfaces/: Interface used in the application.\
        - tests/: Stores unit tests for components and utilities.\

## Technologies Used
`React`: JavaScript library for building user interfaces.\
`Jest and React Testing Library`: Testing frameworks for unit testing React components.\
`Cypress`: Tools for E2E testing.\
`GitHub`: Version control and collaboration platform.\
`NY Times Articles API`: External API for fetching article data.\

## Available Scripts

In the project directory, you can run: 

### `npm install`

Install the project dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode alongwith test coverage

### `npm run coverage`

Run the test cases & create coverage report

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eslint`

List out all the linting error in the project as per the eslint configuration.

### ` npm run e2e`

Open the cypress application to run the E2E test cases.\
Click on E2E test cases to run the configured test cases & then choose the browser of choice.\
Click on listed specin the opened browser to execute the tests