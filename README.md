# AgroMind Frontend

AgroMind is a climate-smart agriculture web application that empowers small-scale farmers to adapt to climate change through AI-generated crop recommendations, weather-aware planting schedules, and sustainable farming tips.

This repository contains the frontend built with React (Vite) and tested with Jest + React Testing Library.

It supports SDG 13: Climate Action by promoting climate-resilient agriculture and local food security.

## Features
User-friendly farmer dashboard

AI-based crop recommendations

Weather and climate alerts

Sustainable farming insights

Responsive design using React + TailwindCSS

## Tech stack
Frontend: React (Vite), TailwindCSS

Testing: Jest & React Testing Library

## Installation & Setup

### 1. Clone the Repository
git clone https://github.com/your-username/agromind-frontend.git

cd agromind-frontend

### 2. Install Dependencies
``` bash
npm install
```

### 3. Run the Development Server
``` bash
npm run dev
```


## Running Tests
This project uses Jest and React Testing Library for testing UI components.

### Run All Tests
``` bash 
npm test 
```
### Components Tested
LoginForm – verifies login inputs, navigation, and validation

ClimateAlerts – ensures climate alerts display correctly and fallback tips display correctly. 

TopCropSuggestion – checks correct rendering of recommendation info
