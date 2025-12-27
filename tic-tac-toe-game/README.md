# Tic-Tac-Toe Game

A Vue.js 3 tic-tac-toe game built with TypeScript and the Composition API.

## Project Setup

This project was created with Vue 3, TypeScript, and includes comprehensive testing setup.

### Dependencies

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Vitest**: Fast unit testing framework
- **Vue Test Utils**: Vue component testing utilities
- **fast-check**: Property-based testing library
- **ESLint**: Code linting and formatting

### Development Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test:unit

# Run tests in watch mode
npm run test:unit -- --watch

# Type checking
npm run type-check

# Lint and fix code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/           # Vue components
│   ├── __tests__/       # Component tests
│   ├── GameBoard.vue    # Game board component (placeholder)
│   ├── GameStatus.vue   # Game status component (placeholder)
│   └── GameControls.vue # Game controls component (placeholder)
├── types/               # TypeScript type definitions
│   └── index.ts         # Game types
├── utils/               # Utility functions
│   └── gameLogic.ts     # Game logic functions (placeholder)
├── App.vue              # Root component
└── main.ts              # Application entry point
```

## Implementation Status

✅ Project setup and dependencies  
⏳ Core game logic (pending)  
⏳ Component implementation (pending)  
⏳ Styling and responsive design (pending)  

## Testing

The project includes both unit tests and property-based tests:

- **Unit Tests**: Test specific scenarios and component behavior
- **Property-Based Tests**: Test universal properties across random inputs using fast-check

Run tests with: `npm run test:unit`

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.