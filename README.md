# 🌤️ Weather Dashboard App
*A multilingual, theme-aware, responsive weather dashboard built with React, TypeScript, MUI, i18next, and OpenWeather APIs.*

👉 **[https://weather-dashboard-hazel-two.vercel.app/login](#)**  

---

## 📌 Overview

This project is a **React.js Weather Dashboard Application** built as part of a technical assignment.  
It includes:

- Login system (with localStorage persistence)
- Weather data from **OpenWeather API**
- Historical monthly weather from **Meteostat API**
- **Light/Dark theme toggle** with Material UI
- **Multilingual support (EN / FA)** using i18next
- **Jalali + Gregorian dates** with `dayjs` + `jalaliday`
- A fully responsive UI built with Material UI
- Charts and daily/hourly weather details

---

## 🚀 Features

### ✔️ **Login / Logout System**
- User enters a name to log in.
- Username is stored in **localStorage**.
- Closing the tab or refreshing **keeps the user logged in**.
- Logout deletes the stored data and returns to login page.

---

### ✔️ **Real-Time Weather Data**
The app fetches weather from **OpenWeather API**, using:

1. **Geocoding API** – converts city name → lat/lon
2. **Current Weather Data**
3. **4-Day Hourly Forecast API**

---

### ✔️ **Past 12 Months Weather Statistics**
- Uses **Meteostat API (RapidAPI)**.
- Fetches the last 12 months of average temperatures.
- Converts month labels into:
    - English (Jan, Feb, …)
    - Persian (فروردین، اردیبهشت، …)
- Used to render a clean temperature history chart.

---

### ✔️ **Internationalization (i18n)**
- Powered by **i18next + i18next-CLI**.
- Full translation JSON files for:
    - English
    - Persian
- Includes RTL support for Persian.

---

### ✔️ **Light / Dark Mode**
- Implemented using **MUI ThemeProvider**.
- 100% dynamic palette switching.
- Persisted by context across the app.

---

### ✔️ **Time & Date System**
- English & Persian dates using:
    - `dayjs`
    - `jalaliday`
- Converts timezones from OpenWeather response.
- Provides:
    - 24-hour format
    - English day name
    - Persian day name
    - Jalali date
    - Gregorian date

---

### ✔️ **Responsive UI**
- Designed using Material UI Grid & Box.
- Works on mobile, tablet, and desktop sizes.
## 📁 Project Structure
```
app/
|
public/
|──── locales/
|──── ui/
|
src/
├── components/
├── contexts/
│ ├── WeatherContext.tsx
│ └── ThemeModeContext.tsx
├── pages/
│ ├── LoginPage.tsx
│ └── Dashboard.tsx
├── utils/
│ └── i18n/
│ └── Weather/
│ └── date.ts
│ └── auth.ts
├── types/
│ └── stylis.d.ts
│ └── weatherTypes.ts
├── App.tsx
└── main.tsx
```


---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-dashb
```
2. Install dependencies
```bash
2. Install dependencies
```
3. Add environment variables
```bash
VITE_OPENWEATHER_API_KEY=your_api_key_here
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```
4. Start the development server
```bash
npm run dev
```

### 🛰️ APIs Used
OpenWeather:
* Geocoding API
* Current Weather
* 4-Day / 3-Hour Forecast
* Meteostat (RapidAPI)
* Meteostat (get station Id)

---
| Technology            | Usage                        |
| --------------------- | ---------------------------- |
| **React + Vite**      | Project structure & build    |
| **TypeScript**        | Static typing                |
| **Material UI**       | UI components & theme system |
| **Axios**             | API calls                    |
| **i18next + CLI**     | Multilingual support         |
| **dayjs + jalaliday** | Date/time formatting         |
| **localStorage**      | Login persistence            |
| **React Router**      | Navigation                   |


---
### 🧪 How Login Works

* On login → { username: "Salar" } stored in localStorage
* AppLayout checks if username exists:

  * YES → allow dashboard
  * NO → redirect to login

* On logout:
  * Remove username from storage
  * Navigate back to login
  
## 🌍 Language Switching

* The app supports English ↔ Persian
* Persian uses RTL layout
* Entire UI updates dynamically (weather API also receives correct lang parameter)

## 🎨 Theme Switching
* Implemented using MUI createTheme()
* Light and dark palettes generated manually
* The theme is reactive and updates instantly

## 📊 Past 12-Month Chart
* Fetches daily temperatures via Meteostat

* Groups values into months

* Calculates average temperature

* Produces:

  * English month labels

  * Persian month labels
  
Chart component then renders the data visually.

## 📄 License
free for all...
