# Hotel Reservation System - Card Slider

## Overview
This project implements a card slider for displaying rooms in a hotel reservation system. The card slider allows users to navigate through different room options, showcasing their features and pricing.

## Project Structure
```
hotel-card-slider
├── public
│   └── index.html          # Main HTML document
├── src
│   ├── App.jsx             # Main application component
│   ├── components
│   │   └── CardSlider.jsx  # Card slider component
│   ├── data
│   │   └── rooms.js        # Room data
│   └── styles
│       └── style.css       # CSS styles
├── package.json             # npm configuration
└── README.md                # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd hotel-card-slider
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage
- The application will display a card slider featuring various hotel rooms.
- Users can navigate through the cards to view different room options, including images, descriptions, and prices.

## Components
- **App.jsx**: The main component that renders the `CardSlider`.
- **CardSlider.jsx**: Contains the logic for displaying and navigating through room cards.
- **rooms.js**: Exports an array of room objects used by the `CardSlider`.

## Styles
- The styles for the application are defined in `style.css`, which includes styles for the card slider and room cards.

## License
This project is licensed under the MIT License.