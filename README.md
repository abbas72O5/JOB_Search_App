# Job Search App

A mobile job search app built with React Native and Expo Router. It lets users browse popular jobs, view nearby jobs, and search for openings by keyword or category.

## Features

- Home screen with featured job sections
- Job search by keyword
- Popular jobs and nearby jobs listings
- Job details and search result pages
- File-based navigation with Expo Router

## Tech Stack

- React Native
- Expo
- Expo Router
- Axios
- React Native Gesture Handler
- React Native Screens

## Getting Started

1. Clone the repository and open the project folder.

2. Install dependencies:

```sh
npm install
```

3. Start the app:

```sh
npm.cmd start
```

4. If Metro gets stuck or shows stale errors, clear the cache and restart:

```sh
npm.cmd start -- --clear
```

5. Use the Expo Go app to scan the QR code shown in the terminal, or press `w` to open the web version.

## Run on Device

- Scan the QR code with Expo Go on Android or iPhone
- Press `w` to open the web version

## Project Structure

- `app/` - App routes and screens
- `components/` - Reusable UI components
- `constants/` - Colors, icons, images, and theme values
- `hook/` - Custom hooks like job fetching
- `assets/` - Fonts, images, and icons

## Notes

- This project uses Expo Router for navigation.
- Job data is fetched from the JSearch API through Axios.
