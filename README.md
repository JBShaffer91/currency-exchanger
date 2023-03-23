# Currency Exchanger

Currency Exchanger is a simple web application that allows users to convert U.S. dollars (USD) to various foreign currencies using the Exchange Rate API. The application provides a user-friendly interface and displays the converted amount based on the user's input.

## Features

- Convert U.S. dollars (USD) to different currencies
- Fetch real-time exchange rates using the Exchange Rate API
- Display converted amount and currency
- Display error messages in case of invalid input or API errors
- Responsive design using Bootstrap

## Getting Started

These instructions will guide you on setting up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

### Installation

1. Clone the repository:

git clone https://github.com/JBShaffer91/currency-exchanger.git


2. Navigate to the project directory:

cd currency-exchanger


3. Install the required dependencies:

npm install (or npm install -y)


4. Create a `.env` file in the project root directory and add your Exchange Rate API key:

API_KEY=your_api_key_here

5. Create a `.gitignore` file and add '.env' to it.

6. Create `webpack.config.js`. There isn't a "one size fits all" webpack build, so research and do your due-diligence to ensure it's configured correctly. You'll know if it isn't.

7. npm run build: bundles `src` into a `dist` directory.

8. npm run start: launches application in your browser. If it doesn't do the thing, google the errors (or ask ChatGPT)

## Built With

- HTML
- CSS
- JavaScript
- Webpack
- Bootstrap
- Exchange Rate API

## Author

Your Name - Justin Shaffer (https://github.com/JBShaffer91)

## License

This project is licensed under the ISC License.

Copyright 2023 Jusitn Shaffer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.