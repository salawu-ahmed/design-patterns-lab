# Custom Hook Pattern

## Overview

The **Custom Hook Pattern** in React is used to extract and reuse stateful logic across multiple components. Instead of repeating the same logic in different places, we encapsulate that logic inside a custom hook and reuse it wherever needed.

This pattern improves:

* **Code reusability**
* **Separation of concerns**
* **Readability and maintainability**
* **Testability**
* **Scalability in large applications**

This repository contains practical, real-world examples of custom hooks implemented as part of the **Design Patterns Lab**, with each example demonstrating a specific use case.

---

## What is a Custom Hook?

A **custom hook** is a JavaScript function that:

1. Starts with the word `use`
2. Uses one or more React hooks (`useState`, `useEffect`, etc.)
3. Encapsulates reusable logic

Example:

```ts
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);

  return { value, toggle };
}
```

---

## Why Use the Custom Hook Pattern?

Without custom hooks:

* Logic gets duplicated across components
* Components become large and harder to maintain
* Testing becomes more difficult

With custom hooks:

* Logic is reusable
* Components stay focused on UI
* Code becomes easier to scale

---

## Folder Structure

```text
src/
├─ hooks/
│  ├─ useToggle.ts
│  ├─ useDebounce.ts
│  └─ ...
├─ components/
│  └─ ToggleButton.tsx
└─ examples/
   ├─ ToggleExamplePage.tsx
   └─ DebounceExample.tsx
```

### Responsibilities

**hooks/**
Contains reusable logic.

**components/**
Contains UI components.

**examples/**
Contains demonstration pages showing how the hooks are used.

---

## Implemented Hooks

### 1. useToggle

Manages boolean state toggling.

Common use cases:

* Opening and closing modals
* Dropdown menus
* Show/hide password
* Dark mode switch
* Like/favorite buttons

Example:

```ts
const { value, toggle } = useToggle();

<button onClick={toggle}>
  {value ? "ON" : "OFF"}
</button>
```

---

### 2. useDebounce

Delays updating a value until the user stops typing or interacting.

Common use cases:

* Search inputs
* API request optimization
* Form validation
* Autocomplete
* Filtering large datasets

Example:

```ts
const debouncedValue = useDebounce(search, 500);
```

---

## Example Use Case: Dropdown Menu

This example demonstrates how `useToggle` can control a dropdown menu.

Behavior:

* Clicking the button toggles visibility
* State logic is reusable
* UI remains simple

---

## Design Principles Demonstrated

* Single Responsibility Principle
* Separation of Concerns
* Reusability
* Composability
* Clean Architecture
* Scalable Component Design

---

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the browser:

```text
http://localhost:5173
```

---

## Branching Strategy

This project follows a structured workflow:

```text
main
development
feature/<pattern-name>
```

Example:

```text
feature/useToggle-dropdown
feature/useDebounce-search
```

All feature branches are merged into `development` via Pull Requests.

---

## Learning Goals

This project is designed to:

* Practice real-world React design patterns
* Build reusable abstractions
* Demonstrate scalable architecture
* Prepare for production-level development
* Serve as a reference for other developers

---

## Future Hooks to Implement

Planned additions:

* useFetch
* useLocalStorage
* usePagination
* useOnClickOutside
* useWindowSize
* usePrevious
* useAsync
* useForm
* useModal
* useUndo

---

## Author

Design Patterns Lab — A practical collection of reusable React and backend patterns built to demonstrate scalable software design and engineering best practices.
