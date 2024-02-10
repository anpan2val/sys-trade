import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
        }),
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/ts/app.tsx'
            ],
            refresh: true,
        }),
    ],
});
