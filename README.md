# Event Explorer

**Event Explorer** is a mobile application developed using **React Native** and **Expo**. It allows users to discover, view, and manage local events with detailed information and an interactive map view.

## Features

- **User Authentication:**
  - Secure Login and Registration screens.
- **Event Listing:**
  - Dynamic display of events using animated cards.
- **Event Details:**
  - Comprehensive event information including title, date, location, and description.
  - Interactive map with markers showing event locations.
- **Modern UI:**
  - Sleek design with gradients, icons, and smooth animations.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

### Clone the Repository

```bash
git clone https://github.com/bledipiperku/EventExplorer.git
cd EventExplorer
```

## Run the App

```bash
npx expo start
```

You can then run the app on an emulator or on your physical device using the Expo Go app.

## Testing

### Test Cases

- **User Authentication**:
  - Test: Verify that users can successfully log in and register.
  - Expected Result: Users are redirected to the Event List upon successful login/registration.
- **Event Listing**:
  - Test: Verify that the event list loads correctly with all event cards displaying accurate information.
  - Expected Result: All events are displayed with correct titles, dates, and locations.
- **Event Details**:
  - Test: Verify that clicking an event card opens a detail view with complete event information and a functional map.
  - Expected Result: The detail screen displays all event data and the map shows the correct location with a marker.
- **Animations and UI**:
  - Test: Check that animations (fade-in, scale-up) are smooth and that UI elements (gradients, icons) are consistent.
  - Expected Result: The app provides a smooth, modern, and visually appealing experience.

## License

This project is licensed under the MIT License.
