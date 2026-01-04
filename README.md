Markdown Preview App (VueJS + TypeScript Version)
A Vue-based markdown editor with real-time preview, converted from my original React project as a requirement for the AltSchool Africa Frontend Engineering program. This project demonstrates my ability to migrate a codebase between frameworks while implementing TypeScript for better type safety.

Project Overview
This application is a rebuild of my React markdown editor using Vue 3 (Composition API) and TypeScript. It maintains all the original features: real-time rendering, file operations, and localStorage persistence, but with the added structure and benefits of Vue's reactivity system.

Features
Real-time Markdown Preview: Powered by Vue's reactive ref and computed properties.

TypeScript Integration: Full type safety for props, events, and data structures.

File Operations: Upload .md files or download your work directly from the browser.

Auto-save: Content persists in localStorage using Vue watchers.

Error Handling: Custom Vue Error Boundary using onErrorCaptured to catch component crashes.

Responsive Design: Mobile-friendly layout using Tailwind CSS.

404 Page: Custom routing for undefined paths.

Technology Stack
I migrated the stack from React to Vue while keeping the core utilities:

Vue 3 (SFC) - Using the <script setup> syntax and Composition API.

TypeScript - For static typing and reducing runtime errors.

Vite - Optimized build tool for Vue.

Vue Router 4 - For SPA navigation.

Tailwind CSS - For consistent styling across the app.

marked.js - For high-performance markdown parsing.

@tailwindcss/typography - For professional styling of the preview output.

Installation and Setup
Clone the repository:

Bash

git clone https://github.com/
cd markdown-preview-vue
Install dependencies:

Bash

npm install
Start development server:

Bash

npm run dev
Build for production:

Bash

npm run build
Project Structure
Plaintext

src/
├── components/
│   ├── Editor.vue          # Markdown input with emits for two-way binding
│   ├── Preview.vue         # Rendered HTML output using v-html
│   └── ErrorBoundary.vue   # Functional error wrapper using onErrorCaptured
├── pages/
│   ├── Home.vue            # Main view orchestrating the editor and preview
│   ├── ErrorTest.vue       # Page to trigger intentional errors
│   └── NotFound.vue        # 404 page
├── router/
│   └── index.ts            # Vue Router configuration and route guards
├── App.vue                 # Root component with router-view
├── main.ts                 # App initialization and plugin registration
└── style.css               # Tailwind CSS directives
Conversion Process & Challenges
1. React to Vue Migration
The biggest challenge was moving from React's useState/useEffect mental model to Vue's ref/watch. I learned that Vue's v-model makes two-way data binding much cleaner than passing down setState functions as props.

2. TypeScript Learning Curve
Since this was my first project using TypeScript with Vue, I had to learn how to type my props using defineProps<{ markdown: string }>() and how to handle HTML events correctly in the file upload function.

3. Error Boundary Differences
In React, I had to use a Class Component for the Error Boundary. In Vue, I learned that I can use the onErrorCaptured lifecycle hook within a regular component, which feels much more modern and integrated.

4. Asynchronous Parsing
The latest version of marked.js works asynchronously. I had to ensure my Preview.vue component handled the Promise correctly using async/await inside a watcher to prevent the UI from flickering.

Key Decisions
Why Vue 3 Composition API? It feels most similar to React Hooks, making the migration smoother while offering better performance.

Why TypeScript? To meet the project requirements and because it makes debugging much easier by catching "undefined" errors during development.

Why localStorage? To maintain feature parity with my previous React project and ensure a seamless user experience.

Student Information
Name: Victoria Lefevre

Student ID: ALT/SOE/025/1625

Institution: AltSchool Africa

Program: Frontend Engineering

Deployment
This application is deployed on Netlify.

Live URL: [Link to your new Vue deployment]