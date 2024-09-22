# Simple Rock, Paper Scissors App

## Description
This is a simple React application that simulates a game of Rock, Paper, Scissors where the user plays against the computer.

## Features

- **User vs Computer**: User selects Rock, Paper, or Scissors, and the computer randomly selects one as well.
- **Game History**: Keeps track of the number of wins, losses, and ties & caches game history for when a user returns in the future.
- **Animations**: Includes animations for countdown and shake effects.
- **Responsive Design**: Designed to be responsive and works well on different screen sizes.

## Installation

1. **Clone the repository**:

sh
git clone https://github.com/yourusername/rps-app.git
cd rps-app

2. **Install dependencies**:

sh
npm install

3. **Start the development server**:

sh
npm start


## Usage

1. **Select an option**: Click on Rock, Paper, or Scissors to make your selection.
2. **View the result**: The app will display the computer's choice and indicate whether you won, lost, or tied.
3. **Check game history**: The app keeps track of your game history, which is displayed at the top of the screen.

## Components

### `RPSLogic`

This component contains the main game logic, including state management for user and computer selections, game history, and countdown effects.

### `RPSHeader`

This component displays the header of the app, including the title "Rock, Paper, Scissors!".

### `RPSSelection`

Allows the user to select Rock, Paper, or Scissors.

### `RPSFaceoff`

Displays the faceoff between the user's choice and the computer's choice, including the countdown and shake effects.

## File Structure
#### Loose overview of file structure

src/
├── features/
│ ├── 
│ ├──  constants.ts
│ └── types.ts
├── utils/
│ └── functions used across features & components
├── constants/
│ └── constants used across features & components
├── 
│ └── index.ts
├── main.tsx
├── style.css
└── ...


## License

This project is licensed under the MIT License.
