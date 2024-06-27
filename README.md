# Chart App

This is a React.js application that displays a chart using the Recharts library. The chart supports timeframe breakdown, zooming, and interactive click events. The chart data is provided in JSON format.

## Features

- Display chart data with daily, weekly, and monthly views.
- Zoom in and out on specific time periods.
- Export the chart as a PNG image.
- Responsive and user-friendly UI.

## Project Structure

├── public/ │ ├── src/ │ ├── assets/ │ │ └── data.json │ ├── components/ │ │ ├── Chart.tsx │ │ └── TimeframeSelector.tsx │ ├── styles/ │ │ ├── Chart.css │ │ └── TimeframeSelector.css │ ├── App.tsx │ ├── index.css │ ├── index.tsx │ ├── react-app-env.d.ts │ └── setupTests.ts ├── .gitignore ├── package.json ├── README.md └── tsconfig.json

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/avinash-18-art/Probz-AI-Assignment.git
   cd chart-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. Ensure your JSON data is placed in `src/assets/data.json`.
2. Use the timeframe selector to switch between daily, weekly, and monthly views.
3. Click the "Export Chart" button to save the chart as a PNG image.

## Deployment

To deploy the application, you can use services like Netlify, Vercel, or GitHub Pages. Ensure that the JSON data is accessible in the deployed environment.

### Netlify Deployment

1. Build the application:

   ```sh
   npm run build
   ```

2. Deploy the `build` directory to Netlify.

### Vercel Deployment

1. Install Vercel CLI:

   ```sh
   npm install -g vercel
   ```

2. Deploy the application:
   ```sh
   vercel
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
