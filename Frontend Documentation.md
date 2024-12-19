# ReadingCorner Frontend Documentation

## Table of Contents

-   [ReadingCorner Frontend Documentation](#readingcorner-frontend-documentation)
    -   [Table of Contents](#table-of-contents)
    -   [Introduction](#introduction)
    -   [Project Structure](#project-structure)
    -   [Installation](#installation)
    -   [Running the Project](#running-the-project)
    -   [Components](#components)
        -   [CustomButton](#custombutton)
        -   [ExploreBooks](#explorebooks)
        -   [Trending](#trending)
    -   [Screens](#screens)
        -   [OnBoarding](#onboarding)
        -   [SignIn](#signin)
        -   [SignUp](#signup)
        -   [HomeScreen](#homescreen)
        -   [Explore](#explore)
        -   [Profile](#profile)
    -   [Constants](#constants)
        -   [mockdata.ts](#mockdatats)
    -   [Styles](#styles)
        -   [Global Styles](#global-styles)
    -   [API Integration](#api-integration)
        -   [Supabase](#supabase)
    -   [Navigation](#navigation)
        -   [Expo Router](#expo-router)

## Introduction

ReadingCorner is a React Native application built with Expo. It allows users to explore and read books, manage their profiles, and more.

## Project Structure

```
ReadingCorner/
├── app/
│   ├── (auth)/
│   │   ├── index.tsx
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   └── _layout.tsx
│   ├── (root)/
│   │   ├── book.tsx
│   │   ├── explore.tsx
│   │   ├── index.tsx
│   │   ├── profile.tsx
│   │   └── _layout.tsx
│   ├── +not-found.tsx
│   └── _layout.tsx
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── components/
│   ├── common/
│   │   └── searchEngine.tsx
│   ├── home/
│   │   ├── exploreBooks.tsx
│   │   ├── ExploreHeader.tsx
│   │   └── header.tsx
│   ├── CustomButton.tsx
│   └── OtherProviders.tsx
├── constants/
│   ├── icons.ts
│   ├── images.ts
│   └── mockdata.ts
├── lib/
│   └── supabase.ts
├── scripts/
│   └── reset-project.js
├── .env
├── app.config.ts
├── Babel.config.js
├── metro.config.js
├── tsconfig.json
└── README.md
```

## Installation

Clone the repository:

```sh
git clone <repository-url>
```

Install dependencies:

```sh
npm install
```

## Running the Project

Start the Expo development server:

```sh
npm start
```

Follow the instructions in the terminal to open the app in an emulator or on a physical device.

## Components

### CustomButton

A reusable button component with customizable styles.

**Props:**

-   `title`: string - The text to display on the button.
-   `bgVariant`: string - The background variant (primary, secondary, etc.).
-   `textVariant`: string - The text variant (primary, secondary, etc.).
-   `IconLeft`: React.ComponentType - An optional icon to display on the left.
-   `IconRight`: React.ComponentType - An optional icon to display on the right.

**Component:**

```jsx
<CustomButton title="Click Me" bgVariant="primary" textVariant="secondary" IconLeft={SomeIcon} IconRight={AnotherIcon} />
```

### ExploreBooks

Displays a list of books in a grid format.

**Props:**

-   `books`: array - An array of book objects to display.

**Component:**

```jsx
<ExploreBooks books={bookList} />
```

### Trending

Displays a list of trending books in a horizontal scroll view.

**Props:**

-   `books`: array - An array of trending book objects to display.

**Component:**

```jsx
<Trending books={trendingBooksList} />
```

## Screens

### OnBoarding

The onboarding screen that introduces the app to new users.

**File:** `./(auth)/index.tsx`

### SignIn

The sign-in screen for user authentication.

**File:** `./(auth)/sign-in.tsx`

### SignUp

The sign-up screen for new user registration.

**File:** `./(auth)/sign-up.tsx`

### HomeScreen

The main screen of the app, displaying a welcome message, search bar, and trending books.

**File:** `./(root)/index.tsx`

### Explore

The explore screen where users can browse and search for books.

**File:** `./(root)/explore.tsx`

### Profile

The profile screen where users can view and edit their profile information.

**File:** `./(root)/profile.tsx`

## Constants

### mockdata.ts

Contains mock data for books and other entities used in the app.

**Import:**

```js
import { books } from "./mockdata";
```

## Styles

### Global Styles

Define global styles in a central location for consistency across the app.

**Import:**

```js
import { globalStyles } from "./styles";
```

## API Integration

### Supabase

Integration with Supabase for authentication and data management.

**File:** `supabase.ts`

**Import:**

```js
import { supabase } from "./supabase";
```

## Navigation

### Expo Router

Using Expo Router for navigation between screens.

**Import:**

```jsx
import { Router } from "expo-router";
```

our documentation provides only an overview of the project structure, installation steps, key components, screens, constants, styles, API integration, and navigation.
