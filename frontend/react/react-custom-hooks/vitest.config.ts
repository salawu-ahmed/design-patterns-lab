import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        // setupFiles: './src/setupTests.ts',
        // coverage: {
        //     reporter: ['text', 'lcov'],
        //     exclude: ['**/node_modules/**', '**/dist/**', '**/src/setupTests.ts']
        // }
    }
})